const body = document.querySelector('body');
const fullScreen = document.querySelector('.big-picture');
const photoEdit = document.querySelector('.img-upload__overlay');

//полноэкранный режим

const closeBigPicture = document.querySelector('#picture-cancel');
const closeBP = () =>{
  closeBigPicture.addEventListener('click', ()=> {
    fullScreen.classList.add('hidden');
    body.classList.remove('modal-open');
    document.removeEventListener('keydown', );
  });
};


//загрузка фото и его настройка

const uplFile = document.querySelector('#upload-file');
const openPhotoEdit = () =>{
  uplFile.addEventListener('change', () => {
    photoEdit.classList.remove('hidden');
    body.classList.add('modal-open');
  });
};

const closeFileUpload = document.querySelector('.img-upload__cancel');
const closeUplFile = () =>{
  closeFileUpload.addEventListener('click', ()=> {
    uplFile.innerHTML = '';
    photoEdit.classList.add('hidden');
    body.classList.remove('modal-open');
  });
};


export {closeBP};
export {openPhotoEdit};
export {closeUplFile};

