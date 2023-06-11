import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';
export default function ImageGalleryItem({ id, smallImage }) {
  return (
    <GalleryItem className="gallery-item" id={id}>
      <GalleryImage src={smallImage} alt={id} />
    </GalleryItem>
  );
}
