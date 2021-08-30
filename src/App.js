import { Component } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./App.css";
import Loader from "react-loader-spinner";
import ImageGallery from "./Components/ImageGallery";
import SearchBar from "./Components/Searchbar";
import pixabayAPI from "./services/imageAPI";
import Section from "./Components/Section";
import Container from "./Components/Container";
import ErrorMessage from "./Components/ErrorMessage";
import Request from "./Components/Request";
import Button from "./Components/Button";
import Modal from "./Components/Modal";

class App extends Component {
  state = {
    query: "",
    images: null,
    page: 1,
    error: null,
    total: null,
    status: "idle",
    showModal: false,
    largeURL: "",
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page, showModal } = this.state;

    if (prevState.query !== query) {
      this.setState({ status: "pending", page: 1 });

      this.firstFetchImages(query, page);
    }

    if (prevState.page !== page) {
      this.nextFetchImages(query, page);
    }

    if (!showModal && !prevState.showModal) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }

  firstFetchImages = (query, page) => {
    pixabayAPI.fetchImage(query, page).then(({ hits, total }) => {
      this.setState({ images: hits, total, status: "resolved" });
      if (!total) {
        this.setState({
          error: "Something went wrong! Please, change your request!",
          status: "rejected",
        });
      } else {
        this.setState({ error: null });
      }
    });
  };

  nextFetchImages = (query, page) => {
    pixabayAPI.fetchImage(query, page).then(({ hits }) => {
      this.setState((prevState) => ({
        images: [...prevState.images, ...hits],
      }));
    });
  };

  handleFormSubmit = (query) => {
    this.setState({
      query,
    });
  };

  handleIncrement = () => {
    this.setState({ page: this.state.page + 1 });
  };

  openModal = (url) => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      largeURL: url,
    }));
  };

  closeModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      largeURL: "",
    }));
  };

  render() {
    const { error, status, total, page, showModal, largeURL } = this.state;

    return (
      <>
        <SearchBar onSubmit={this.handleFormSubmit} />;
        <Section>
          <Container>
            {status === "idle" && <Request />}
            {status === "rejected" && <ErrorMessage message={error} />}
            {status === "resolved" && (
              <ImageGallery
                images={this.state.images}
                openModal={this.openModal}
              />
            )}
            {status === "pending" && (
              <Loader type="Watch" color="#00BFFF" height={80} width={80} />
            )}
            {total - page * 12 > 0 && <Button onClick={this.handleIncrement} />}
          </Container>
        </Section>
        {showModal && (
          <Modal onClose={this.closeModal}>
            <img src={largeURL} alt="" />
          </Modal>
        )}
        <ToastContainer autoClose={3000} />
      </>
    );
  }
}

export default App;
