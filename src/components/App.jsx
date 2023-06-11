import { Component } from 'react';
import { Container } from './App.styled';
import SearchBar from './SearchBar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader';
import Modal from './Modal';
import { getImages } from './QueryGallery/QueryGallery';
export default class App extends Component {
  state = {
    key: '',
    page: null,
    images: [],
    isLoading: false,
    query: '',
    isOpen: false,
  };
  setQuery = data => {
    this.setState({
      query: data,
      page: 1,
      images: [],
    });
  };
  componentDidMount() {
    window.addEventListener('keydown', this.closeModalbyEsc);
  }
  async componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.page !== page || prevState.query !== query) {
      this.setState({ isLoading: true });
      await getImages(query, page)
        .then(response =>
          this.setState(prevState => ({
            images: [...prevState.images, ...response.hits],
          }))
        )
        .catch(error => error.message)
        .finally(() => this.setState({ isLoading: false }));
    }
    return;
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModalbyEsc);
  }
  fetchImages = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  handleId = evt => {
    this.setState({ isOpen: true, key: Number(evt.target.alt) });
  };
  getLargeImg = () => {
    const { images, key } = this.state;
    const largePicture = images
      .map(({ largeImageURL }) => largeImageURL)
      .find((image, index, pictures) => pictures.indexOf(image) === key);
    return largePicture;
  };
  closeModal = evt => {
    if (evt.currentTarget === evt.target) {
      this.setState({
        isOpen: false,
      });
    }
  };
  closeModalbyEsc = evt => {
    if (evt.key === 'Escape') {
      this.setState({
        isOpen: false,
      });
    }
  };
  render() {
    const { images, isOpen, isLoading, query } = this.state;
    return (
      <Container>
        <SearchBar onSubmit={this.setQuery} />
        {images && <ImageGallery images={images} openModal={this.handleId} />}
        {images.length > 0 && <Button onClick={this.fetchImages} />}
        {isLoading && <Loader />}
        {isOpen && (
          <Modal
            largeImage={this.getLargeImg()}
            toggleModal={this.closeModal}
            title={query}
          />
        )}
      </Container>
    );
  }
}
