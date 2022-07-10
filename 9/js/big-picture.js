const fullScreen = document.querySelector('.big-picture');
const commentList = fullScreen.querySelector('.social__comments');
const commentTemplate = commentList.querySelector('.social__comment');
const body = document.querySelector('body');
const comList = commentList.childNodes;

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

  if (comList.length > commentsPerClick) {
    const sliceComms = Array.from(document.querySelectorAll('.social__comment'));
    sliceComms.slice(0, commentsPerClick).forEach((element) => element.classList.remove('hidden'));
    newText.textContent = `${ commentsPerClick }  из `;
  } else {
    comList.forEach((el) => el.classList.remove('hidden'));
    newText.textContent = `${ comList.length } из `;
    loadMore.classList.add('hidden');
  }

  body.classList.add('modal-open');
  fullScreen.classList.remove('hidden');
};

export {showBigPicture, hideBigPictureButton, onCloseBigPicture};
