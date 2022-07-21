const fullScreen = document.querySelector('.big-picture');
const commentList = fullScreen.querySelector('.social__comments');
const commentTemplate = commentList.querySelector('.social__comment');
const body = document.querySelector('body');

const loadMore = document.querySelector('.comments-loader');
const shownCommentsCount = document.querySelector('.social__comment-count');
const newText = shownCommentsCount.childNodes[0];
const commentsPerClick = 5;

const hideBigPictureButton = ()=> {
  loadMore.classList.remove('hidden');
  fullScreen.classList.add('hidden');
  body.classList.remove('modal-open');
};

const onCloseBigPicture = (e) => {
  if (e.key === 'Escape') {
    hideBigPictureButton();
  }
};

const showMoreComments = () => {
  const hiddenComments = Array.from(document.querySelectorAll('.social__comment.hidden'));
  const commentsToShow = hiddenComments.slice(0, commentsPerClick);
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
  socialComment.querySelector('.social__picture').setAttribute('src', avatar);
  socialComment.querySelector('.social__picture').setAttribute('alt', name);
  socialComment.querySelector('.social__text').textContent = message;
  socialComment.classList.add('hidden');

  return socialComment;
};

const showBigPicture = ({url, likes, comments, description}) => {
  commentList.innerHTML = '';
  document.addEventListener('keydown', onCloseBigPicture);

  fullScreen.querySelector('.big-picture__img').firstElementChild.setAttribute('src', url);
  fullScreen.querySelector('.likes-count').textContent = likes;
  fullScreen.querySelector('.comments-count').textContent = comments.length;
  fullScreen.querySelector('.social__caption').textContent = description;

  commentList.append(...comments.map(makeComment));

  showMoreComments();

  body.classList.add('modal-open');
  fullScreen.classList.remove('hidden');
};

export {showBigPicture, hideBigPictureButton, onCloseBigPicture, showMoreComments};
