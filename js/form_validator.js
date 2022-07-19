import {sendData} from './api.js';
import {showAlert} from './util.js';
import {closePhotoUpload} from './buttons.js';

const photoEdit = document.querySelector('.img-upload__overlay');
const photoUploadSuccesForm = document.querySelector('#success').content.querySelector('.success');
const photoUploadFailForm = document.querySelector('#error').content.querySelector('.error');
const body = document.querySelector('body');

const re = /^#[A-Za-zA-Яа-я0-9]{1,20}$/;
const uploadForm = document.querySelector('.img-upload__form');
const uploadButton = document.querySelector('#upload-submit');
const maxComLenght = 140;
const space =  /\s+/;

const photoSuccessUploadResult = () => {
  const resultFormClone = photoUploadSuccesForm.cloneNode(true);

  const onCloseUploadResult = (e) => {
    if (e.key === 'Escape') {
      resultFormClone.remove();
    }
  };
  body.insertBefore(resultFormClone, body.lastChild);
  document.addEventListener('keydown', onCloseUploadResult);

  document.addEventListener('click', () => {
    resultFormClone.remove();
  });

  const successButton = document.querySelector('.success__button');

  successButton.addEventListener('click',()=> {
    document.removeEventListener('keydown', onCloseUploadResult);
    resultFormClone.remove();
  });
};

const photoFailUploadResult = () => {
  photoEdit.classList.add('hidden');
  body.classList.remove('modal-open');

  const resultFormClone = photoUploadFailForm.cloneNode(true);

  const onCloseUploadResult = (e) => {
    if (e.key === 'Escape') {
      resultFormClone.remove();
    }
  };

  document.addEventListener('click', () => {
    resultFormClone.remove();
  });

  body.insertBefore(resultFormClone, body.lastChild);
  document.addEventListener('keydown', onCloseUploadResult);

  const successButton = document.querySelector('.error__button');

  successButton.addEventListener('click',()=> {
    document.removeEventListener('keydown', onCloseUploadResult);
    resultFormClone.remove();
  });
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
