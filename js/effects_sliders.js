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


const effectSettings = {
  chrome:{
    filter: 'grayscale',
    units: '',
  },
  sepia:{
    filter: 'sepia',
    units: '',
  },
  marvin:{
    filter: 'invert',
    units: '%',
  },
  phobos:{
    filter: 'blur',
    units: 'px',
  },
  heat:{
    filter: 'brightness',
    units: '',
  },
};

sliderElement.noUiSlider.on('update', () => {
  const value = sliderElement.noUiSlider.get();
  valueElement.setAttribute('value', value);
  const selectedFilter = changePhotoFilterForm.querySelector('.effects__radio:checked').value;

  const settings = effectSettings[selectedFilter];
  if(settings) {
    imgUploadPreview.style.filter = `${settings.filter}(${value}${settings.units})`;
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
      start: 1,
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
      start: 1,
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
      start: 100,
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
      start: 3,
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
      start: 3,
      step: 0.1
    });
  }
};

const changePhotoFilter = () => {
  changePhotoFilterForm.addEventListener('click', changeFilter);
};

export {changePhotoFilter};
