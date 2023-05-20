import React, { useEffect, useState } from 'react';
import { Audio } from  'react-loader-spinner'
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import './ImageGallery.css';
import { Button } from 'components/Button/Button';
import Modal from '../Modal/Modal'
import PropTypes from 'prop-types';

const ImageGallery = ({searchText}) => {
  const [images, setIsImages] = useState([]);
  const [error, setIsError] = useState(null);
  const [status, setIsStatus] = useState('idle');
  const [page, setIsPage] = useState(1);
  const [showModal, setIsShowModal] = useState(false);
  const [largeImageURL, setIsLargeImageURL] = useState(''); 
  const [totalHits, setTotalHits] = useState(0);

  useEffect (() => {
    if (searchText) {
      setIsStatus('pending');
      setIsPage(1)

      fetch(
        `https://pixabay.com/api/?key=36341058-58041bef9cd62d3470c4ef98b&q=${searchText}&image_type=photo&per_page=12`
      )
        .then(res => {
          if (res.ok) {
            return res.json();
          }

          return Promise.reject(
            new Error('Error loading image. Enter correct search')
          );
        })
        .then(data => {
          setIsImages(data.hits);
          setTotalHits(data.totalHits);
          setIsStatus('resolved')
        })
        .catch(error => {
          setIsError(error);
          setIsStatus('rejected');
        }
    )};
    }, 
   [searchText]);

const handleLoadMoreClick = () => {
  setIsPage(page + 1);
    
  fetch(
    `https://pixabay.com/api/?key=36341058-58041bef9cd62d3470c4ef98b&q=${searchText}&image_type=photo&per_page=12&page=${page + 1}`
  )
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(
        new Error('Error loading images. Enter correct search')
      );
    })
    .then(data => {
      setIsImages([...images, ...data.hits]);
      setIsStatus('resolved')
    })
    .catch(error => {
      setIsError(error);
      setIsStatus('rejected');
    })
};

    const toggleModal = () => {
        setIsShowModal(!showModal)
    }
    
    const handleImageClick = largeImageURL => {
      setIsLargeImageURL(largeImageURL)
      setIsShowModal(true);
  };
    

    // const { error, status, showModal, total, images, page } = this.state;

    if (status === 'idle') {
      return <div> Введите свой поиск в форму</div>;
    }

    if (status === 'pending') {
      return <div><Audio
        height="80"
        width="80"
        radius="9"
        color='green'
        ariaLabel='three-dots-loading'
        wrapperStyle={{ margin: 'auto' }}
        wrapperClassName="my-audio-class"
      /></div>;
    }

    console.log('status:', status);

    if (status === 'rejected') {
      console.log('Error message:', error.message);
      return <div>{error.message}</div>;
    }

    if (status === 'resolved') {
      return (
          <>
             {showModal && <Modal onClose={toggleModal} largeImageURL={largeImageURL} />}
          <ul className="gallery">
            {images.map(image => (
              <ImageGalleryItem key={image.id} image={image} onClick={handleImageClick} />
            ))}
          </ul>
          {images.length > 0 && Math.ceil(totalHits/12) !== page &&(
            <Button onClick={handleLoadMoreClick} />
              )}
        </>
      );
    }
  }

  ImageGallery.propTypes = {
  searchText: PropTypes.string.isRequired,
};


export default ImageGallery