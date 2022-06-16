const DESCRIPTION = [
  'Описание 1',
  'Описание 2',
  'Описание 3',
  'Описание 4',
  'Описание 5',
  'Описание 6',
];
const MESSAGE_TEXT = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const NAMES = [
  'Авраам',
  'Игорь',
  'Елена',
  'Саша',
  'Иван',
  'Дана',
];
const PHOTO_OBJECT_COUNT = 25;
//Число от 1 до 25

//Случайное число
const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => {
  return elements[getRandomPositiveInteger(0, elements.length - 1)];
};
//Создание массива комментариев
const createCommentObject = () => {
  return {
    id: getRandomPositiveInteger('0','600'),
    avatar: 'img/avatar-' + getRandomPositiveInteger('1','6') + '.svg',
    message: getRandomArrayElement(MESSAGE_TEXT),
    name: getRandomArrayElement(NAMES),
  };
}; 

const commentObjects = Array.from({length: 1}, createCommentObject);
//Создание основного массива//
const createPhotoObject = () => {
  return {
    //id:,
    //url:,
    description: getRandomArrayElement(DESCRIPTION),
    likes: getRandomPositiveInteger('15','200'),
    //comments: commentObjects,
  };
}; 

 const photoObjects = Array.from({length: PHOTO_OBJECT_COUNT}, createPhotoObject);

//console.log(commentObjects);

//console.log(photoObjects);

