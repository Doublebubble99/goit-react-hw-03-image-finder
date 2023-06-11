import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';
export default function ImageGalleryItem({ id, smallImage }) {
  return (
    <GalleryItem className="gallery-item" id={id}>
      <GalleryImage src={smallImage} alt={id} />
    </GalleryItem>
  );
}
ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  smallImage: PropTypes.string.isRequired,
};
