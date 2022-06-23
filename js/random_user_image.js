import {createPhotos} from './data.js';

const pictures = document.querySelector('.pictures');
const templateFragment = document.querySelector('#picture')
.content
.querySelector('.picture');

const photoObj = createPhotos();

const similarListFragment = document.createDocumentFragment();

photoObj.forEach(({url, likes, comments}) => {
  const picture = templateFragment.cloneNode(true);
  picture.querySelector('.picture__img').setAttribute('src', url)
  picture.querySelector('.picture__likes').textContent = likes;
  picture.querySelector('.picture__comments').textContent = comments;  
  similarListFragment.appendChild(picture);
});

similarListElement.appendChild(similarListFragment);
