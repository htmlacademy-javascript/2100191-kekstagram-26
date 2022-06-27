//import { showBigPicture } from './big-picture';
const picturesElement = document.querySelector('.pictures');
const templateFragment = document.querySelector('#picture').content.querySelector('.picture');

const makePhotoElement = ({url, likes, comments}) => {
  const picture = templateFragment.cloneNode(true);
  picture.querySelector('.picture__img').setAttribute('src', url);
  picture.querySelector('.picture__likes').textContent = likes;
  picture.querySelector('.picture__comments').textContent = comments.length;
  // и вот тут в следующем задании про открытие big picture надо будет добавить слушатель click
  //picture.addEventListener('click', showBigPicture(photo)());
  return picture;
};

const renderPhotos = (photos) => {
  const similarListFragment = document.createDocumentFragment();
  photos.forEach((photo) => similarListFragment.appendChild(makePhotoElement(photo)));
  picturesElement.appendChild(similarListFragment);
};
export {renderPhotos};
