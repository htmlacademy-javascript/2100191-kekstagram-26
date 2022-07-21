import {showBigPicture} from './big-picture.js';
import {debounce} from './util.js';

const RERENDER_DELAY = 500;

const picturesElement = document.querySelector('.pictures');
const templateFragment = document.querySelector('#picture').content.querySelector('.picture');

const allPhotosButton = document.querySelector('#filter-default');
const randomPhotosButton = document.querySelector('#filter-random');
const mostPopularPhotosButton = document.querySelector('#filter-discussed');

const makePhotoElement = (photo) => {
  const {url, likes, comments} = photo;
  const pictureElement = templateFragment.cloneNode(true);
  pictureElement.querySelector('.picture__img').setAttribute('src', url);
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.addEventListener('click', () => showBigPicture(photo));
  return pictureElement;
};

const renderPhotos = (photos) => {
  const similarListFragment = document.createDocumentFragment();

  photos.forEach((photo) => similarListFragment.appendChild(makePhotoElement(photo)));

  picturesElement.appendChild(similarListFragment);
  document.querySelector('.img-filters').classList.remove('img-filters--inactive');
};

const showAllPhotos = (photos) => {
  allPhotosButton.addEventListener('click', debounce(() => {
    document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
    allPhotosButton.classList.add('img-filters__button--active');
    document.querySelectorAll('.picture').forEach((e) => e.remove());
    renderPhotos(photos);
  }, RERENDER_DELAY));
};

const randomPhotos = (photos) => {
  const similarListFragment = document.createDocumentFragment();

  const shuffled = photos
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    .slice(0, 10);

  shuffled.forEach((photo) => similarListFragment.appendChild(makePhotoElement(photo)));

  picturesElement.appendChild(similarListFragment);
};

const showRandomPhotos = (photos) => {
  randomPhotosButton.addEventListener('click', debounce(() => {
    document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
    randomPhotosButton.classList.add('img-filters__button--active');
    document.querySelectorAll('.picture').forEach((e) => e.remove());
    randomPhotos(photos);
  }, RERENDER_DELAY));
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
  mostPopularPhotosButton.addEventListener('click', debounce(() => {
    document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
    mostPopularPhotosButton.classList.add('img-filters__button--active');
    document.querySelectorAll('.picture').forEach((e) => e.remove());
    const similarListFragment = document.createDocumentFragment();
    photos.slice().sort(mostPopularPhotos).forEach((photo) => similarListFragment.appendChild(makePhotoElement(photo)));
    popularPhotos(photos);
  }, RERENDER_DELAY));
};

export {renderPhotos, showAllPhotos, showRandomPhotos, showMostPopularPhotos};
