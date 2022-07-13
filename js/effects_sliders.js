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
    slider: {
      range: {
        min: 0,
        max: 1
      },
      start: 1,
      step: 0.1
    },
    filter: 'grayscale',
    units: '',
  },
  sepia:{
    slider: {
      range: {
        min: 0,
        max: 1
      },
      start: 1,
      step: 0.1
    },
    filter: 'sepia',
    units: '',
  },
  marvin:{
    slider: {
      range: {
        min: 0,
        max: 100
      },
      start: 100,
      step: 1
    },
    filter: 'invert',
    units: '%',
  },
  phobos:{
    slider: {
      range: {
        min: 0,
        max: 3
      },
      start: 3,
      step: 0.1
    },
    filter: 'blur',
    units: 'px',
  },
  heat:{
    slider: {
      range: {
        min: 1,
        max: 3
      },
      start: 3,
      step: 0.1
    },
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
  imgUploadPreview.classList = `img-upload__preview effects__preview--${evt.target.value}`;
  const effect = effectSettings[evt.target.value];
  if (effect) {
    sliderElement.noUiSlider.updateOptions(effectSettings[evt.target.value].slider);
    return;
  }

  imgUploadPreview.style.filter = '';
  imgUploadPreview.classList.add('effects__preview--none');
  sliderElement.classList.add('hidden');
};

const changePhotoFilter = () => {
  document.querySelectorAll('.effects__radio').forEach((element) => element.addEventListener('change', changeFilter));
};

export {changePhotoFilter};
