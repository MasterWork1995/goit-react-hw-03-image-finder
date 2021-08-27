import React from "react";
import { Component } from "react";
import s from "./Searchbar.module.css";
import { toast } from "react-toastify";
import Container from "../Container";

class SearchBar extends Component {
  state = {
    query: "",
  };

  handleSubmitForm = (e) => {
    e.preventDefault();

    if (!this.state.query) {
      toast.error("Please, enter your request!");
      return;
    }

    this.props.onSubmit(this.state.query);
    this.setState({ query: "" });
  };

  handleChangeQuery = (e) => {
    this.setState({ query: e.currentTarget.value.toLowerCase().trim() });
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <Container>
          <form onSubmit={this.handleSubmitForm} className={s.SearchForm}>
            <button type="submit" className={s.Button}>
              <span className={s.Label}>Search</span>
            </button>

            <input
              className={s.Input}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.handleChangeQuery}
              value={this.state.query}
            />
          </form>
        </Container>
      </header>
    );
  }
}

export default SearchBar;
