import { ImageList } from './ImageGallery.styled';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { object } from 'prop-types';
export default function ImageGallery({ images, openModal }) {
  function openModal(evt) {
    console.log(evt.target);
  }
  return (
    <ImageList className="gallery" onClick={openModal}>
      {images.map((image, index) => (
        <ImageGalleryItem
          smallImage={image.webformatURL}
          id={index}
          key={index}
        />
      ))}
    </ImageList>
  );
}
ImageGallery.propTypes = {
  images: PropTypes.arrayOf(object.isRequired).isRequired,
  openModal: PropTypes.func.isRequired,
};
