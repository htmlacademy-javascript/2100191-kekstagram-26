import {sendData} from './api.js';
import {showAlert, isEscapeKey} from './util.js';
import {closePhotoUpload} from './buttons.js';

const maxComLenght = 140;
const space =  /\s+/;
const re = /^#[A-Za-zA-Яа-я0-9]{1,20}$/;

const photoUploadSuccesForm = document.querySelector('#success').content.querySelector('.success');
const photoUploadFailForm = document.querySelector('#error').content.querySelector('.error');
const uploadForm = document.querySelector('.img-upload__form');
const uploadButton = document.querySelector('#upload-submit');

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

const photoSuccessUploadResult = () => showResultMessage(photoUploadSuccesForm);
const photoFailUploadResult = () => {
  showResultMessage(photoUploadFailForm);
  document.querySelector('.img-upload__overlay').classList.add('hidden');
  document.body.classList.remove('modal-open');
};

const isDuplicate = (aray) => {
  const s = new Set(aray);
  return s.size === aray.length;
};

const validateHashTag = (val) => {
  if (val.trim().length === 0) {
    return true;
  }
  const array = val.trim().toLowerCase().split(space);
  const arrayTest = array.every((value) => re.test(value));
  const arrayLenght = array.length <= 5;

  return arrayTest === arrayLenght === isDuplicate(array);
};

const validateComment = (value) => value.length <= maxComLenght;

const blockSubmitButton = () => {
  uploadButton.disabled = true;
  uploadButton.textContent = 'Публикую...';
};

const unblockSubmitButton = () => {
  uploadButton.disabled = false;
  uploadButton.textContent = 'Опубликовать';
};

pristine.addValidator(
  uploadForm.querySelector('.text__hashtags'),
  validateHashTag,
  'Недопустимый формат хэш-тега'
);

pristine.addValidator(
  uploadForm.querySelector('.text__description'),
  validateComment,
  'Длина комментария не может составлять больше 140 символов'
);

const setUserFormSubmit = () => {
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();

    if (isValid) {
      blockSubmitButton();
      sendData(
        () => {
          closePhotoUpload();
          unblockSubmitButton();
          photoSuccessUploadResult();
        },
        () => {
          showAlert('Не удалось отправить форму. Попробуйте ещё раз');
          unblockSubmitButton();
          photoFailUploadResult();
        },
        new FormData(evt.target),
      );
    }
  });
};
export {setUserFormSubmit};
