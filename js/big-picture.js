const fullScreen = document.querySelector('.big-picture');
const commentTemplate = fullScreen.content.querySelector('.social__comment');
const commentList = fullScreen.content.querySelector('.social__comments');

function showBigPicture(photo) {

  return function(url, likes, comments, description) {
    fullScreen.removeClass('hidden');
    fullScreen.querySelector('.big-picture__img').firstElementChild.setAttribute('src', url);
    fullScreen.querySelector('.likes-count').textContent = likes;
    fullScreen.querySelector('.comments-count').textContent = comments.lenght;
    fullScreen.querySelector('.social__caption').textContent = description;

    const makeComment = (avatar, name, message) =>{
      const socialComment = commentTemplate.cloneNode(true);
      socialComment.querySelector('social_picture').setAttribute('src', avatar);
      socialComment.querySelector('social_picture').setAttribute('alt', name);
      socialComment.querySelector('social__text').textContent = message;
      return socialComment;
    };

    const similarListFragment = document.createDocumentFragment();
    comments.forEach((comment) => similarListFragment.appendChild(makeComment(comment)));
    commentList.appendChild(similarListFragment);
  };
}

export {showBigPicture};
