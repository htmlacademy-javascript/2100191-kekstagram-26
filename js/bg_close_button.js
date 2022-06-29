const body = document.querySelector('body');
const fullScreen = document.querySelector('.big-picture');

const closeButton = document.querySelector('#picture-cancel');

const closeBP = () =>{
  closeButton.addEventListener('click', ()=> {
    fullScreen.classList.add('hidden');
    body.removeClass('modal-open');
    document.removeEventListener('keydown', );
  });
};

export {closeBP};
