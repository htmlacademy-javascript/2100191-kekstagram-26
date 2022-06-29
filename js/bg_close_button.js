const body = document.querySelector('body');
const fullScreen = document.querySelector('.big-picture');

const closeButton = document.querySelector('#picture-cancel');

closeButton.addEventListener('click', ()=> {
  fullScreen.classList.add('hidden');
  fullScreen.querySelector('.social__comment-count').removeClass('hidden');
  fullScreen.querySelector('.comments-loader').removeClass('hidden');
  body.removeClass('modal-open');
  fullScreen.reset();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    fullScreen.classList.add('hidden');
    fullScreen.querySelector('.social__comment-count').removeClass('hidden');
    fullScreen.querySelector('.comments-loader').removeClass('hidden');
    body.removeClass('modal-open');
    fullScreen.reset();
  }
});
