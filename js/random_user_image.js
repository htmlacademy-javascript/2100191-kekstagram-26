import {showBigPicture} from './big-picture.js';
import {debounce} from './util.js';

const picturesElement = document.querySelector('.pictures');
const templateFragment = document.querySelector('#picture').content.querySelector('.picture');

const allPhotosButton = document.querySelector('#filter-default');
const randomPhotosButton = document.querySelector('#filter-random');
const mostPopularPhotosButton = document.querySelector('#filter-discussed');

const RERENDER_DELAY = 500;

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
  allPhotosButton.addEventListener('click', ()=>{
    document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
    allPhotosButton.classList.add('img-filters__button--active');
    document.querySelectorAll('.picture').forEach((e) => e.remove());
    renderPhotos(photos);
  });
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
  randomPhotosButton.addEventListener('click', ()=>{
    document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
    randomPhotosButton.classList.add('img-filters__button--active');
    document.querySelectorAll('.picture').forEach((e) => e.remove());
    //randomPhotos(photos);
    debounce(() => randomPhotos(photos),RERENDER_DELAY,);
  });
};

const mostPopularPhotos =(a, b) => {
  if(a.comments.length > b.comments.length) {
    return -1;
  } else {
    return 1;
  }
};

const popularPhotos = (photos) => {
  const similarListFragment = document.createDocumentFragment();

  photos
    .slice()
    .sort(mostPopularPhotos)
    .forEach((photo) => similarListFragment.appendChild(makePhotoElement(photo)));

  picturesElement.appendChild(similarListFragment);
};

const showMostPopularPhotos = (photos) => {
  mostPopularPhotosButton.addEventListener('click', ()=>{
    document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
    mostPopularPhotosButton.classList.add('img-filters__button--active');
    document.querySelectorAll('.picture').forEach((e) => e.remove());
    popularPhotos(photos);
  });
};

export {renderPhotos, showAllPhotos, showRandomPhotos, showMostPopularPhotos};
