const fullScreen = document.querySelector('.big-picture');
const commentTemplate = fullScreen.content.querySelector('.social__comment');
const commentList = fullScreen.content.querySelector('.social__comments');
const body = document.querySelector('body');

//добавление данных конкретной фотографии
const makeConfig = (url, likes, comments, description) =>{
  fullScreen.removeClass('hidden');
  fullScreen.querySelector('.big-picture__img').firstElementChild.setAttribute('src', url);
  fullScreen.querySelector('.likes-count').textContent = likes;
  fullScreen.querySelector('.comments-count').textContent = comments.lenght;
  fullScreen.querySelector('.social__caption').textContent = description;
};

//создание комментария
const makeComment = (avatar, name, message) =>{
  const socialComment = commentTemplate.cloneNode(true);
  socialComment.querySelector('social_picture').setAttribute('src', avatar);
  socialComment.querySelector('social_picture').setAttribute('alt', name);
  socialComment.querySelector('social__text').textContent = message;
  return socialComment;
};
//наполнение комментариями
const createComment = (comments) =>{
  const similarListFragment = document.createDocumentFragment();
  comments.forEach((comment) => similarListFragment.appendChild(makeComment(comment)));
  commentList.appendChild(similarListFragment);
};

/*после открытия окна
  fullScreen.querySelector('.social__comment-count').classList.add('hidden');
  fullScreen.querySelector('.comments-loader').classList.add('hidden');
  body.classList.add('modal-open');
*/

/*закрытие окна
  const closeButton = document.querySelector('#picture-cancel')

  closeButton.addEventListener('click', function(){
     fullScreen.classList.add('hidden');
     fullScreen.querySelector('.social__comment-count').removeClass('hidden');
     fullScreen.querySelector('.comments-loader').removeClass('hidden');
     body.removeClass('modal-open');
  })
*/
