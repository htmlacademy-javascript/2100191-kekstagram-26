import { hideBigPictureButton, onCloseBigPicture } from './big-picture.js';

const body = document.querySelector('body');
const photoEdit = document.querySelector('.img-upload__overlay');
const pictureCancel = document.querySelector('#picture-cancel');
const uplFile = document.querySelector('#upload-file');
const imgUploadForm = document.querySelector('.img-upload__form');
const uploadCancel = document.querySelector('.img-upload__cancel');
const loadMore = document.querySelector('.comments-loader');
const commentCount = document.querySelector('.social__comment-count');
const shownCommentsCount = commentCount.childNodes[0];
let startCommentsLength = 5;
const scaleControlValue = document.querySelector('.scale__control--value');
const uploadScale = document.querySelector('.img-upload__scale');
const imgUploadPreview = document.querySelector('.img-upload__preview');
const sliderElement = document.querySelector('.effect-level__slider');

const closePhotoUpload = ()=> {
  imgUploadForm.reset();
  imgUploadPreview.className = 'img-upload__preview';
  scaleControlValue.setAttribute('value', '100%');
  imgUploadPreview.style.cssText = 'transform: scale(1)';
  photoEdit.classList.add('hidden');
  body.classList.remove('modal-open');
};

const onClosePhotoUpload = (e) => {
  if (e.key === 'Escape') {
    closePhotoUpload();
  }
};
//полноэкранный режим
const closeBigPicture = () => {
  pictureCancel.addEventListener('click', () => {
    hideBigPictureButton();
    document.removeEventListener('keydown', onCloseBigPicture);
  });
};
//закрытие и открытие фото редактора
const openPhotoEdit = () => {
  uplFile.addEventListener('change', () => {
    photoEdit.classList.remove('hidden');
    body.classList.add('modal-open');
    sliderElement.classList.add('hidden');
    document.addEventListener('keydown', onClosePhotoUpload);
  });
};
const closeFileUpload = () => {
  uploadCancel.addEventListener('click', ()=> {
    document.removeEventListener('keydown', onClosePhotoUpload);
    closePhotoUpload();
  });
};
//загрузить еще
const loadMorePictures = () => {
  loadMore.addEventListener('click', () => {
    const maxComments = document.querySelectorAll('.social__comment').length;
    if (startCommentsLength >= maxComments) {
      loadMore.classList.add('hidden');
      startCommentsLength = 5;
    } else {
      startCommentsLength += 5;
      const array = Array.from(document.querySelectorAll('.social__comment'));
      const visComments = array.slice(0, startCommentsLength);
      visComments.forEach((el) => el.classList.remove('hidden'));
      shownCommentsCount.textContent = `${visComments.length} из `;
      if (startCommentsLength >= maxComments) {
        loadMore.classList.add('hidden');
        startCommentsLength = 5;
      }
    }
  });
};
// масштаб изображения
const smallerBigger = (evt) => {
  const value = scaleControlValue.getAttribute('value');
  const cleanValue = value.replace(/\D/g,'');
  if (evt.target.closest('.scale__control--smaller')) {
    if (cleanValue > 25){
      scaleControlValue.setAttribute('value', `${Number(cleanValue) - 25}%`);
      imgUploadPreview.style.cssText = `transform: scale( ${(Number(cleanValue) - 25)/100})`;
    }
  }
  if (evt.target.closest('.scale__control--bigger')) {
    if (cleanValue < 100){
      scaleControlValue.setAttribute('value', `${Number(cleanValue) + 25}%`);
      imgUploadPreview.style.cssText = `transform: scale( ${(Number(cleanValue) + 25)/100})`;
    }
  }
};

const photoScale =() => {
  uploadScale.addEventListener('click', smallerBigger);
};

export {closeBigPicture , openPhotoEdit, closeFileUpload, loadMorePictures, photoScale};
