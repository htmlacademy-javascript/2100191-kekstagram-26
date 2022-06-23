import {createPhotos} from './data.js';

const pictures = document.querySelector('.pictures');
const templateFragment = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const photoObj = createPhotos();

const similarListFragment = document.createDocumentFragment();

photoObj.forEach(({url, likes}) => {
  const picture = templateFragment.cloneNode(true);
  picture.querySelector('.picture__img').src = url;
  picture.querySelector('.picture__likes').textContent = likes;
  //picture.querySelector('.picture__comments').textContent = comments;
  similarListFragment.appendChild(picture);
});

pictures.appendChild(similarListFragment);
