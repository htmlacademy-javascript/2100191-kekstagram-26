import { hideBigPictureButton, onCloseBigPicture } from './big-picture.js';

const body = document.querySelector('body');
const photoEdit = document.querySelector('.img-upload__overlay');
const pictureCancel = document.querySelector('#picture-cancel');
const uplFile = document.querySelector('#upload-file');
const imgUploadForm = document.querySelector('.img-upload__form');
const uploadCancel = document.querySelector('.img-upload__cancel');
const loadMore = document.querySelector('.comments-loader');
const shownCommentsCount = document.querySelector('.social__comment-count');
const newText = shownCommentsCount.childNodes[0];
let startCommentsLength = 5;

//полноэкранный режим
const closeBigPicture = () => {
  pictureCancel.addEventListener('click', () => {
    startCommentsLength = 5;
    loadMore.classList.remove('hidden');
    newText.textContent = `${startCommentsLength  } из `;
    hideBigPictureButton();
    document.removeEventListener('keydown', onCloseBigPicture);
  });
};
//загрузка фото и его настройка
const openPhotoEdit = () =>{
  uplFile.addEventListener('change', () => {
    photoEdit.classList.remove('hidden');
    body.classList.add('modal-open');
  });
};
const closeFileUpload = () =>{
  uploadCancel.addEventListener('click', ()=> {
    imgUploadForm.reset();
    photoEdit.classList.add('hidden');
    body.classList.remove('modal-open');
  });
};
//загрузить еще
const loadMorePictures = () =>{
  loadMore.addEventListener('click', () => {
    startCommentsLength += 5;
    const array = Array.from(document.querySelectorAll('.social__comment'));
    const visComments = array.slice(0, startCommentsLength);

    visComments.forEach((el) => el.classList.remove('hidden'));

    const maxComments = document.querySelectorAll('.social__comment').length;

    newText.textContent = `${startCommentsLength  } из `;

    if (startCommentsLength >= maxComments) {
      loadMore.classList.add('hidden');
    }
  });
};

export {closeBigPicture , openPhotoEdit, closeFileUpload, loadMorePictures};
