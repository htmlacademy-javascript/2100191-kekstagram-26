import {sendData} from './api.js';
import {showAlert, isEscapeKey} from './util.js';
import {photoUploadCloseHandler} from './buttons.js';

const MAX_COM_LENGHT = 140;
const MAX_HASHTAGS = 5;
const ON_FORM_UPLOAD_TEXT = 'Публикую...';
const FORM_UPLOAD_TEXT = 'Опубликовать';
const WRONG_HASHTAG_TEXT = 'Недопустимый формат хэш-тега';
const WRONG_DESCRIPTION_TEXT = 'Длина комментария не может составлять больше 140 символов';

const space =  /\s+/;
const re = /^#[A-Za-zA-Яа-я0-9]{1,20}$/;

const photoUploadSuccesForm = document.querySelector('#success').content.querySelector('.success');
const photoUploadFailForm = document.querySelector('#error').content.querySelector('.error');
const uploadForm = document.querySelector('.img-upload__form');
const uploadButton = document.querySelector('#upload-submit');
const hashtagsText = uploadForm.querySelector('.text__hashtags');
const descriptionText = uploadForm.querySelector('.text__description');

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__text',
  errorClass: 'img-upload__text--invalid',
  successClass: 'img-upload__text--valid',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
  errorTextClass: 'form__error',
});

const onCloseUploadResult = (evt) => {
  if (isEscapeKey(evt)) {
    onCloseResultMessage(evt);
  }
};

function onCloseResultMessage(evt) {
  if (evt.target.type === 'button' || !(evt.target.closest('.success__inner') || evt.target.closest('.success__inner'))) {
    document.querySelectorAll('.success, .error').forEach((element) => element.remove());
    document.removeEventListener('keydown', onCloseUploadResult);
    document.removeEventListener('click', onCloseResultMessage);
  }
}

const showResultMessage = (messageElement) => {
  document.body.append(messageElement.cloneNode(true));
  document.addEventListener('keydown', onCloseUploadResult);
  document.addEventListener('click', onCloseResultMessage);
};

const showSuccessPhotoUploadResult = () => showResultMessage(photoUploadSuccesForm);
const showFailPhotoUploadResult = () => {
  showResultMessage(photoUploadFailForm);
  document.querySelector('.img-upload__overlay').classList.add('hidden');
  document.body.classList.remove('modal-open');
};

const isDuplicate = (aray) => {
  const duplicateTestArray = new Set(aray);
  if (duplicateTestArray.size === aray.length){ return false;}
};

const validateHashTag = (val) => {
  if (val.trim().length === 0) {
    return true;
  }
  const cleanHashTag = val.trim().toLowerCase().split(space);
  const hashTagsValidity = cleanHashTag.every((value) => re.test(value));
  const HashTagLenght = val <= MAX_HASHTAGS;

  return hashTagsValidity === HashTagLenght === isDuplicate(cleanHashTag);
};

const validateComment = (value) => value.length <= MAX_COM_LENGHT;

const unBlockSubmitButton = () => {
  uploadButton.disabled = false;
  uploadButton.textContent = FORM_UPLOAD_TEXT;
};

pristine.addValidator(
  hashtagsText,
  validateHashTag,
  WRONG_HASHTAG_TEXT
);

pristine.addValidator(
  descriptionText,
  validateComment,
  WRONG_DESCRIPTION_TEXT
);

const setUserFormSubmit = () => {
  uploadForm.addEventListener('submit', function onFormUpload (evt) {
    evt.preventDefault();

    const isValid = pristine.validate();

    if (isValid) {
      uploadButton.disabled = true;
      uploadButton.textContent = ON_FORM_UPLOAD_TEXT;
      sendData(
        () => {
          photoUploadCloseHandler();
          unBlockSubmitButton();
          showSuccessPhotoUploadResult();
        },
        () => {
          showAlert('Не удалось отправить форму. Попробуйте ещё раз');
          unBlockSubmitButton();
          showFailPhotoUploadResult();
        },
        new FormData(evt.target),
      );
    }
  });
};
export {setUserFormSubmit};
