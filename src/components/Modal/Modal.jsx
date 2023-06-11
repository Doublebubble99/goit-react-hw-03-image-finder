import { Overlay, ModalWindow } from './Modal.styled';
import PropTypes from 'prop-types';
export default function Modal({ largeImage, title, toggleModal }) {
  return (
    <Overlay className="overlay" onClick={toggleModal}>
      <ModalWindow className="modal">
        <img src={largeImage} alt={title} />
      </ModalWindow>
    </Overlay>
  );
}
Modal.propTypes = {
  largeImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
