import s from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  tags = "image",
  openModal,
}) => {
  return (
    <li className={s.Item}>
      <img
        onClick={(e) => {
          openModal(e.target.dataset.large);
        }}
        src={webformatURL}
        alt={tags}
        className={s.Image}
        data-large={largeImageURL}
      />
    </li>
  );
};

export default ImageGalleryItem;
