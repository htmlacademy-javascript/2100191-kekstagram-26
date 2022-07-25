import {hideBigPictureButton, onCloseBigPicture, onShowMoreComments} from './big-picture.js';
import {isEscapeKey} from './util.js';

const MIN_PHOTOS_SCALE = 25;
const MAX_PHOTOS_SCALE = 100;
const SCALE_STEP = 25;

const body = document.querySelector('body');
const photoEdit = document.querySelector('.img-upload__overlay');
const pictureCancel = document.querySelector('#picture-cancel');
const uplFile = document.querySelector('#upload-file');
const imgUploadForm = document.querySelector('.img-upload__form');
const uploadCancel = document.querySelector('.img-upload__cancel');
const loadMore = document.querySelector('.comments-loader');
const scaleControlValue = document.querySelector('.scale__control--value');
const uploadScale = document.querySelector('.img-upload__scale');
const userPic = document.querySelector('.setup-user-pic');
const sliderForm = document.querySelector('.img-upload__effect-level');
const changePhotoFilterForm = document.querySelector('.img-upload__effects');


const onClosePhotoUpload = (e) => {
  if (isEscapeKey(e) || e.type === 'click') {
    photoUploadCloseHandler();
  }
};

function photoUploadCloseHandler () {
  imgUploadForm.reset();
  scaleControlValue.setAttribute('value', '100%');
  userPic.style.cssText = 'transform: scale(1)';
  userPic.style.filter = '';
  photoEdit.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onClosePhotoUpload);
}

const onChangeSmallerBigger = (evt) => {
  const value = scaleControlValue.getAttribute('value');
  const cleanValue = value.replace(/\D/g,'');
  if (evt.target.closest('.scale__control--smaller')) {
    if (cleanValue > MIN_PHOTOS_SCALE){
      scaleControlValue.setAttribute('value', `${Number(cleanValue) - SCALE_STEP}%`);
      userPic.style.transform = `scale( ${(Number(cleanValue) - SCALE_STEP)/100})`;
    }
  }
  if (evt.target.closest('.scale__control--bigger')) {
    if (cleanValue < MAX_PHOTOS_SCALE){
      scaleControlValue.setAttribute('value', `${Number(cleanValue) + SCALE_STEP}%`);
      userPic.style.transform = `scale( ${(Number(cleanValue) + SCALE_STEP)/100})`;
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

    if(changePhotoFilterForm.querySelector('.effects__radio:checked').value === 'none'){
      sliderForm.classList.add('hidden');
    }

    document.addEventListener('keydown', onClosePhotoUpload);
  });

  uploadCancel.addEventListener('click', photoUploadCloseHandler);

  loadMore.addEventListener('click', onShowMoreComments);

  uploadScale.addEventListener('click', onChangeSmallerBigger);
};


export {initButtonHandlers, photoUploadCloseHandler};

