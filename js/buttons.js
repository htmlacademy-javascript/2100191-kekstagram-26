import { bigPictureButton } from './big-picture.js';

const body = document.querySelector('body');
const fullScreen = document.querySelector('.big-picture');
const photoEdit = document.querySelector('.img-upload__overlay');
const pictureCancel = document.querySelector('#picture-cancel');
const uplFile = document.querySelector('#upload-file');
const uploadCancel = document.querySelector('.img-upload__cancel');

//полноэкранный режим
const closeBigPicture = () =>{
  pictureCancel.addEventListener('click', ()=> {
    fullScreen.classList.add('hidden');
    body.classList.remove('modal-open');
    document.removeEventListener('keydown', bigPictureButton);
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
    uplFile.innerHTML = '';
    photoEdit.classList.add('hidden');
    body.classList.remove('modal-open');
  });
};

export {closeBigPicture , openPhotoEdit, closeFileUpload};
