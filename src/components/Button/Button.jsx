import { LoadButton } from './Button.styled';
export default function Button({ onClick }) {
  return (
    <LoadButton type="button" onClick={onClick}>
      Load more
    </LoadButton>
  );
}
