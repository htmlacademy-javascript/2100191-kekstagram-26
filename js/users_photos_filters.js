import {debounce} from './util.js';
import {renderPhotos, makePhotoElement} from './render_user_image.js';

const RERENDER_DELAY = 500;
const RANDOM_PHOTOS_ON_PAGE = 10;

const picturesElement = document.querySelector('.pictures');

const allPhotosButton = document.querySelector('#filter-default');
const randomPhotosButton = document.querySelector('#filter-random');
const mostPopularPhotosButton = document.querySelector('#filter-discussed');


const onPhotoFilterChange = () => {
  document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
  document.querySelectorAll('.picture').forEach((e) => e.remove());
};

const showAllPhotos = (photos) => {
  allPhotosButton.addEventListener('click', function onShowAllPhotosButtonClick () {
    onPhotoFilterChange();
    allPhotosButton.classList.add('img-filters__button--active');
    renderPhotos(photos);
  });
};

const randomPhotos = (photos) => {
  const similarListFragment = document.createDocumentFragment();

  const shuffledPhotos = photos.sort(() => Math.random() - Math.random()).slice(0, RANDOM_PHOTOS_ON_PAGE);

  shuffledPhotos.forEach((photo) => similarListFragment.appendChild(makePhotoElement(photo)));

  picturesElement.appendChild(similarListFragment);
};

const showRandomPhotos = (photos) => {
  randomPhotosButton.addEventListener('click', function onRandomPhotosButtonClick () {
    onPhotoFilterChange();
    randomPhotosButton.classList.add('img-filters__button--active');
    randomPhotos(photos);
  });
};

const mostPopularPhotos =(a, b) => (a.comments.length > b.comments.length) ? -1 : 1;

const popularPhotos = (photos) => {
  const similarListFragment = document.createDocumentFragment();

  photos
    .slice()
    .sort(mostPopularPhotos)
    .forEach((photo) => similarListFragment.appendChild(makePhotoElement(photo)));

  picturesElement.appendChild(similarListFragment);
};

const showMostPopularPhotos = (photos) => {
  mostPopularPhotosButton.addEventListener('click', function onMostPopularPhotosButtonClick () {
    onPhotoFilterChange();
    mostPopularPhotosButton.classList.add('img-filters__button--active');
    popularPhotos(photos);
  });
};


const initListeners = (photos) => {
  allPhotosButton.addEventListener('click', debounce(() => showAllPhotos(photos), RERENDER_DELAY));
  randomPhotosButton.addEventListener('click', debounce(() => showRandomPhotos(photos), RERENDER_DELAY));
  mostPopularPhotosButton.addEventListener('click', debounce(() => showMostPopularPhotos(photos), RERENDER_DELAY));
};

export {initListeners};
