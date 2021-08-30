import ImageGalleryItem from "../ImageGalleryItem";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ images, openModal }) => {
  return (
    <>
      <ul className={s.ImageGallery}>
        {images.map(({ id, webformatURL, largeImageURL, tags }) => {
          return (
            <ImageGalleryItem
              key={id}
              webformatURL={webformatURL}
              openModal={openModal}
              largeImageURL={largeImageURL}
              tags={tags}
            />
          );
        })}
      </ul>
    </>
  );
};

export default ImageGallery;
