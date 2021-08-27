import s from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ webformatURL, largeImageURL, tags = "image" }) => {
  return (
    <li className={s.Item}>
      <img
        src={webformatURL}
        alt={tags}
        className={s.Image}
        data-large={largeImageURL}
      />
    </li>
  );
};

export default ImageGalleryItem;
