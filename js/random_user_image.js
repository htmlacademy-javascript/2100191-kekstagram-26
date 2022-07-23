import {showBigPicture} from './big-picture.js';

const picturesElement = document.querySelector('.pictures');
const templateFragment = document.querySelector('#picture').content.querySelector('.picture');


const makePhotoElement = (photo) => {
  const {url, likes, comments} = photo;
  const pictureElement = templateFragment.cloneNode(true);
  pictureElement.querySelector('.picture__img').setAttribute('src', url);
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.addEventListener('click', function onPhotoClick () {showBigPicture(photo);});
  return pictureElement;
};

const renderPhotos = (photos) => {
  const similarListFragment = document.createDocumentFragment();

  photos.forEach((photo) => similarListFragment.appendChild(makePhotoElement(photo)));

  picturesElement.appendChild(similarListFragment);
  document.querySelector('.img-filters').classList.remove('img-filters--inactive');
};


export {renderPhotos, makePhotoElement};
