import {bigPictureButton} from './big-picture.js';

const body = document.querySelector('body');
const fullScreen = document.querySelector('.big-picture');
const photoEdit = document.querySelector('.img-upload__overlay');
const pictureCancel = document.querySelector('#picture-cancel');
const uplFile = document.querySelector('#upload-file');
const uploadCancel = document.querySelector('.img-upload__cancel');
const loadMore = document.querySelector('.comments-loader');
const shownCommentsCount = document.querySelector('.social__comment-count');
let startCommentsLenght = 5;

//полноэкранный режим
const closeBigPicture = () => {
  pictureCancel.addEventListener('click', () => {
    startCommentsLenght = 5;
    loadMore.classList.remove('hidden');
    fullScreen.classList.add('hidden');
    shownCommentsCount.innerHTML = '5 из 15 комментариев';
    body.classList.remove('modal-open');
    document.removeEventListener('keydown', bigPictureButton);
  });
};

//загрузка фото и его настройка
const openPhotoEdit = () => {
  uplFile.addEventListener('change', () => {
    photoEdit.classList.remove('hidden');
    body.classList.add('modal-open');
  });
};
const closeFileUpload = () => {
  uploadCancel.addEventListener('click', () => {
    uplFile.innerHTML = ' ';
    photoEdit.classList.add('hidden');
    body.classList.remove('modal-open');
  });
};

//загрузить еще
const loadMorePictures = () => {
  loadMore.addEventListener('click', () => {
    startCommentsLenght += 5;
    const array = Array.from(document.querySelectorAll('.social__comment'));
    const visComments = array.slice(0, startCommentsLenght);

    visComments.forEach((el) => el.classList.remove('hidden'));

    shownCommentsCount.textContent = `${startCommentsLenght} из 15 комментариев`;

    if (startCommentsLenght === 15) {
      loadMore.classList.add('hidden');
    }
  });
};

export {closeBigPicture , openPhotoEdit, closeFileUpload, loadMorePictures};
