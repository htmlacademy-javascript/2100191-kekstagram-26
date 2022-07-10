const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
const changePhotoFilterForm = document.querySelector('.img-upload__effects');
const imgUploadPreview = document.querySelector('.img-upload__preview');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 1,
  },
  start: 0.5,
  step: 0.1,
  connect: 'lower',
});

sliderElement.noUiSlider.on('update', () => {
  valueElement.value = sliderElement.noUiSlider.get();
});


//перемены


/*const changeFilter = (evt) => {
  if(evt.target.closest('#effect-none')){
    imgUploadPreview.className = 'img-upload__effects  effects';
    imgUploadPreview.classList.add('effects__preview--none');
  }
  if(evt.target.closest('#effect-chrome')){
    imgUploadPreview.className = 'img-upload__effects  effects';
    imgUploadPreview.classList.add('effects__preview--chrome');
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1
      },
      start: 0.5,
      step: 0.1
    });
  }
  if(evt.target.closest('#effect-sepia')){
    imgUploadPreview.className = 'img-upload__effects  effects';
    imgUploadPreview.classList.add('effects__preview--sepia');
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1
      },
      start: 0.5,
      step: 0.1
    });
  }
  if(evt.target.closest('#effect-marvin')){
    imgUploadPreview.className = 'img-upload__effects  effects';
    imgUploadPreview.classList.add('effects__preview--marvin');
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100
      },
      start: 50,
      step: 1
    });
  }
  if(evt.target.closest('#effect-phobos')){
    imgUploadPreview.className = 'img-upload__effects  effects';
    imgUploadPreview.classList.add('effects__preview--phobos');
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 3
      },
      start: 1.5,
      step: 0.1
    });
  }
  if(evt.target.closest('#effect-heat')){
    imgUploadPreview.className = 'img-upload__effects  effects';
    imgUploadPreview.classList.add('effects__preview--heat');
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 1,
        max: 3
      },
      start: 1.5,
      step: 0.1
    });
  }
};

const changePhotoFilter = () => {
  changePhotoFilterForm.addEventListener('click', changeFilter);
};

export {changePhotoFilter};


/*changePhotoFilterForm.addEventListener('change', (evt) => {

  if(evt.target.closest('#effect-none')){
    //
  }

  if(evt.target.closest('#effect-chrome')){
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1
      },
      start: 0.5,
      step: 0.1
    });

    if(evt.target.closest('#effect-sepia')){
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1
        },
        start: 0.5,
        step: 0.1
      });
    }

    if(evt.target.closest('#effect-marvin')){
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 100
        },
        start: 50,
        step: 1
      });
    }

    if(evt.target.closest('#effect-phobos')){
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 3
        },
        start: 1.5,
        step: 0.1
      });
    }

    if(evt.target.closest('#effect-heat')){
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 1,
          max: 3
        },
        start: 1.5,
        step: 0.1
      });
    }


    sliderElement.noUiSlider.set(80);

  }
}
); */

