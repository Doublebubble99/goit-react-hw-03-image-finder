import { ImageList } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
export default function ImageGallery({ images, openModal }) {
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
