import { Overlay, ModalWindow } from './Modal.styled';
export default function Modal({ largeImage, title, toggleModal }) {
  return (
    <Overlay className="overlay" onClick={toggleModal}>
      <ModalWindow className="modal">
        <img src={largeImage} alt={title} />
      </ModalWindow>
    </Overlay>
  );
}
