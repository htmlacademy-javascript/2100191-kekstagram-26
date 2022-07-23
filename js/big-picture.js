import {isEscapeKey} from './util.js';

const fullScreen = document.querySelector('.big-picture');
const commentList = fullScreen.querySelector('.social__comments');
const commentTemplate = commentList.querySelector('.social__comment');
const body = document.querySelector('body');

const loadMore = document.querySelector('.comments-loader');
const shownCommentsCount = document.querySelector('.social__comment-count');
const newText = shownCommentsCount.childNodes[0];
const COMMENTS_PER_CLICK = 5;

const hideBigPictureButton = ()=> {
  loadMore.classList.remove('hidden');
  fullScreen.classList.add('hidden');
  body.classList.remove('modal-open');
};

const onCloseBigPicture = (e) => {
  if (isEscapeKey(e)) {
    hideBigPictureButton();
  }
};

const onShowMoreComments = () => {
  const hiddenComments = Array.from(document.querySelectorAll('.social__comment.hidden'));
  const commentsToShow = hiddenComments.slice(0, COMMENTS_PER_CLICK);
  commentsToShow.forEach((element) => element.classList.remove('hidden'));

  const visibleComments = document.querySelectorAll('.social__comment:not(.hidden)').length;
  newText.textContent = `${ visibleComments } из `;

  const commentsLen = document.querySelectorAll('.social__comment').length;
  if (commentsLen <= visibleComments) {
    loadMore.classList.add('hidden');
  }
};

const makeComment = ({avatar, name, message}) => {
  const socialComment = commentTemplate.cloneNode(true);
  socialComment.querySelector('.social__picture').src = avatar;
  socialComment.querySelector('.social__picture').alt = name;
  socialComment.querySelector('.social__text').textContent = message;
  socialComment.classList.add('hidden');

  return socialComment;
};

const showBigPicture = ({url, likes, comments, description}) => {
  commentList.innerHTML = '';
  document.addEventListener('keydown', onCloseBigPicture);

  fullScreen.querySelector('.big-picture__img').firstElementChild.src = url;
  fullScreen.querySelector('.likes-count').textContent = likes;
  fullScreen.querySelector('.comments-count').textContent = comments.length;
  fullScreen.querySelector('.social__caption').textContent = description;

  commentList.append(...comments.map(makeComment));

  onShowMoreComments();

  body.classList.add('modal-open');
  fullScreen.classList.remove('hidden');
};

export {showBigPicture, hideBigPictureButton, onCloseBigPicture, onShowMoreComments};
