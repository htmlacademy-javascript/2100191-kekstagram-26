import {sendData} from './api.js';
import {showAlert} from './util.js';
import {closeFileUpload} from './buttons.js';

const re = /^#[A-Za-zA-Яа-я0-9]{1,20}$/;
const uploadForm = document.querySelector('.img-upload__form');
const uploadButton = document.querySelector('#upload-submit');
const maxComLenght = 140;
const space =  /\s+/;

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

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__text',
  errorClass: 'img-upload__text--invalid',
  successClass: 'img-upload__text--valid',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
  errorTextClass: 'form__error',
});

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
          closeFileUpload();
          unblockSubmitButton();
        },
        () => {
          showAlert('Не удалось отправить форму. Попробуйте ещё раз');
          unblockSubmitButton();
        },
        new FormData(evt.target),
      );
    }
  });
};

export {setUserFormSubmit};
