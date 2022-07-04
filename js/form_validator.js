const re = /^#[A-Za-zA-Яа-я0-9]{1,20}$/;
const uploadForm = document.querySelector('.img-upload__form');
const maxComLenght = 140;
const space =  /\s+/;

const validateHashTag=(val)=>{
  const array = val.split(space);
  const arrayTest = array.every((value) => re.test(value));
  const arrayLenght = array.length <= 5;
  const newArray = array.map((newArra) => newArra.toLowerCase());
  const isDuplicate = (aray) => {
    const s = new Set(aray);
    return s.size === aray.length;
  };
  if(arrayTest === true && arrayLenght === true && isDuplicate(newArray) === true){return true;}
};

const validateComment =(value)=>{if(value === 0){return true;}else{ return value.length <= maxComLenght;}};

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__text',
  errorClass: 'img-upload__text--invalid',
  successClass: 'img-upload__text--valid',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
  errorTextClass: 'form__error',
});

pristine.addValidator(
  uploadForm.querySelector('#text_hashtags'),
  validateHashTag,
  'Недопустимый формат хэш-тега'
);

pristine.addValidator(
  uploadForm.querySelector('#text_description'),
  validateComment,
  'Длина комментария не может составлять больше 140 символов'
);


uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
