const fullScreen = document.querySelector('.big-picture');
const commentList = fullScreen.querySelector('.social__comments');
const commentTemplate = commentList.querySelector('.social__comment');


const makeComment = ({avatar, name, message}) => {
  const socialComment = commentTemplate.cloneNode(true);
  socialComment.querySelector('social_picture').setAttribute('src', avatar);
  socialComment.querySelector('social_picture').setAttribute('alt', name);
  socialComment.querySelector('social__text').textContent = message;
  return socialComment;
};

const showBigPicture = ({url, likes, comments, description}) => {
  fullScreen.querySelector('.big-picture__img').firstElementChild.setAttribute('src', url);
  fullScreen.querySelector('.likes-count').textContent = likes;
  fullScreen.querySelector('.comments-count').textContent = comments.lenght;
  fullScreen.querySelector('.social__caption').textContent = description;

  commentList.append(
    comments.map(
      makeComment(comment)
    )
  );
};
export {showBigPicture};
