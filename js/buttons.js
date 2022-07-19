import {hideBigPictureButton, onCloseBigPicture, showMoreComments} from './big-picture.js';
import {isEscapeKey} from './util.js';

const body = document.querySelector('body');
const photoEdit = document.querySelector('.img-upload__overlay');
const pictureCancel = document.querySelector('#picture-cancel');
const uplFile = document.querySelector('#upload-file');
const imgUploadForm = document.querySelector('.img-upload__form');
const uploadCancel = document.querySelector('.img-upload__cancel');
const loadMore = document.querySelector('.comments-loader');
const scaleControlValue = document.querySelector('.scale__control--value');
const uploadScale = document.querySelector('.img-upload__scale');
const imgUploadPreview = document.querySelector('.img-upload__preview');
const sliderElement = document.querySelector('.effect-level__slider');
const changePhotoFilterForm = document.querySelector('.img-upload__effects');

const onClosePhotoUpload = (e) => {
  if (isEscapeKey(e)) {
    closePhotoUpload();
  }
};

function closePhotoUpload () {
  imgUploadForm.reset();
  imgUploadPreview.className = 'img-upload__preview';
  scaleControlValue.setAttribute('value', '100%');
  imgUploadPreview.style.cssText = 'transform: scale(1)';
  photoEdit.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onClosePhotoUpload);
}

const smallerBigger = (evt) => {
  const value = scaleControlValue.getAttribute('value');
  const cleanValue = value.replace(/\D/g,'');
  if (evt.target.closest('.scale__control--smaller')) {
    if (cleanValue > 25){
      scaleControlValue.setAttribute('value', `${Number(cleanValue) - 25}%`);
      imgUploadPreview.style.transform = `scale( ${(Number(cleanValue) - 25)/100})`;
    }
  }
  if (evt.target.closest('.scale__control--bigger')) {
    if (cleanValue < 100){
      scaleControlValue.setAttribute('value', `${Number(cleanValue) + 25}%`);
      imgUploadPreview.style.transform = `scale( ${(Number(cleanValue) + 25)/100})`;
    }
  }
};

const initButtonHandlers = () => {
  pictureCancel.addEventListener('click', () => {
    hideBigPictureButton();
    document.removeEventListener('keydown', onCloseBigPicture);
  });

  uplFile.addEventListener('change', () => {
    photoEdit.classList.remove('hidden');
    body.classList.add('modal-open');

    if(changePhotoFilterForm.querySelector('.effects__radio:checked').value === 'none'){sliderElement.classList.add('hidden');}

    document.addEventListener('keydown', onClosePhotoUpload);
  });

  uploadCancel.addEventListener('click', closePhotoUpload);

  loadMore.addEventListener('click', showMoreComments);

  uploadScale.addEventListener('click', smallerBigger);
};
export {initButtonHandlers, closePhotoUpload};
