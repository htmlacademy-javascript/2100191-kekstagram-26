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
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

sliderElement.noUiSlider.on('update', () => {
  if(changePhotoFilterForm.closest('#effect-marvin')){
    valueElement.value = sliderElement.noUiSlider.get();
    imgUploadPreview.style.filter = `invert(${sliderElement.noUiSlider.get()}%)`;
  }
  if(changePhotoFilterForm.closest('#effect-phobos')){
    valueElement.setAttribute('value', `${sliderElement.noUiSlider.get()}px`);
  }
  else{
    valueElement.setAttribute('value', sliderElement.noUiSlider.get());
    if(changePhotoFilterForm.closest('#effect-chrome')){
      imgUploadPreview.style.filter = `grayscale(${sliderElement.noUiSlider.get()})`;
    }
    if(changePhotoFilterForm.closest('#effect-sepia')){
      imgUploadPreview.style.filter = `sepia(${sliderElement.noUiSlider.get()})`;
    }
    if(changePhotoFilterForm.closest('#effect-heat')){
      imgUploadPreview.style.filter = `brightness(${sliderElement.noUiSlider.get()})`;
    }
  }
});

//перемены

const changeFilter = (evt) => {
  sliderElement.classList.remove('hidden');
  imgUploadPreview.className = 'img-upload__preview';
  if(evt.target.closest('#effect-none')){
    imgUploadPreview.classList.add('effects__preview--none');
    sliderElement.classList.add('hidden');
  }
  if(evt.target.closest('#effect-chrome')){
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
