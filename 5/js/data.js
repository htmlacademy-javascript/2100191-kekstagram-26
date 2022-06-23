import getRandomArrayElement from './util.js';  
import getRandomPositiveInteger from './util.js';
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
//Создание массива комментариев
const createCommentObject = (id) => ({
  id,
  avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGE_TEXT),
  name: getRandomArrayElement(NAMES),
});

const createComments = () => Array.from({length: 5}, (_, id) => createCommentObject(id+1));
//Создание основного массива//
const createPhotoObject = (id) => ({
  return {
    id,
    url: `photos/${id}.jpg`,
    description: getRandomArrayElement(DESCRIPTION),
    likes: getRandomPositiveInteger(15,200),
    comments: createComments(),
  };
}); 

const createPhotos = () => Array.from({length: PHOTO_OBJECT_COUNT}, (_, id) => createPhotoObject(id+1));

console.log(createPhotos());
export {createPhotos};
