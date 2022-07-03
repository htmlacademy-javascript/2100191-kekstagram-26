const re = /^#[A-Za-zA-Яа-яЁё0-9]{1,20}$/;
const Uploadform = document.querySelector('.img-upload__form');
const minComLenght = 5;
const maxComLenght = 140;
const space = ' ';
const mySet = new Set();

const validateHashTag=(val)=>{
  const array = val.split(space);
  const arrayTest = array.every((value) => re.test(value));
  const arrayLenght = array.length <= 5;

  array.forEach((value)=>{
    mySet.add(value);
  });

  if(arrayTest && arrayLenght){return true;}
};

const validateComment =(value)=>value.length >= minComLenght && value.length <= maxComLenght;

const pristine = new Pristine(Uploadform, {
  classTo: 'img-upload__text',
  errorClass: 'img-upload__text--invalid',
  successClass: 'img-upload__text--valid',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
  errorTextClass: 'form__error',
});

pristine.addValidator(
  Uploadform.querySelector('#text_hashtags'),
  validateHashTag,
  'Неправильный формат хэш-тега'
);

pristine.addValidator(
  Uploadform.querySelector('#text_description'),
  validateComment,
  'От 5 до 140 символов'
);


Uploadform.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
