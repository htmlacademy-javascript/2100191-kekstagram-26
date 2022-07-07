const fullScreen = document.querySelector('.big-picture');
const commentList = fullScreen.querySelector('.social__comments');
const commentTemplate = commentList.querySelector('.social__comment');
const body = document.querySelector('body');
const comList = commentList.childNodes;

const hideBigPictureButton = (e)=> {
  if (e.key === 'Escape') {
    fullScreen.classList.add('hidden');
    fullScreen.querySelector('.social__comment-count').removeClass('hidden');
    fullScreen.querySelector('.comments-loader').removeClass('hidden');
    body.removeClass('modal-open');
  }
};

const makeComment = ({avatar, name, message}) => {
  const socialComment = commentTemplate.cloneNode(true);
  socialComment.querySelector('.social__picture').setAttribute('src', avatar);
  socialComment.querySelector('.social__picture').setAttribute('alt', name);
  socialComment.querySelector('.social__text').textContent = message;
  return socialComment;
};

const showBigPicture = ({url, likes, comments, description}) => {
  commentList.innerHTML = '';

  document.addEventListener('keydown', bigPictureButton);

  fullScreen.querySelector('.big-picture__img').firstElementChild.setAttribute('src', url);
  fullScreen.querySelector('.likes-count').textContent = likes;
  //fullScreen.querySelector('.comments-count').textContent = comments.lenght;
  fullScreen.querySelector('.social__caption').textContent = description;
  
  commentList.append(...comments.map(makeComment));
  
  for(let i = 0; i <= 4; i++){
    comList[i].classList.remove('hidden');
  }
  
  body.classList.add('modal-open');
  fullScreen.classList.remove('hidden');
};

export {showBigPicture};
export {bigPictureButton};
