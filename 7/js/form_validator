const re = /^#[A-Za-zA-Яа-яЁё0-9]{1,20}$/;
const Uploadform = document.querySelector('.img-upload__form');

const pristine = new Pristine(Uploadform, {
  classTo: 'img-upload__text',
  errorClass: 'img-upload__text--invalid',
  successClass: 'img-upload__text--valid',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
  errorTextClass: 'form__error',
});

const validateHashTag =(value)=>re.test(value);

pristine.addValidator(
  Uploadform.querySelector('#text_hashtags'),
  validateHashTag,
  'ошибка'
);


const validateComment =(value)=>value.length >= 5 && value.length <= 140;

pristine.addValidator(
  Uploadform.querySelector('#text_description'),
  validateComment,
  'От 4 до 140 символов'
);


Uploadform.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
