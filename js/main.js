import './form_validator.js';
import {choseFile} from './chosePhoto.js';
import {setUserFormSubmit} from './form_validator.js';
import {changePhotoFilter} from './effects_sliders.js';

import {initButtonHandlers} from './buttons.js';

import {getData} from './api.js';
import {renderPhotos, initListeners} from './random_user_image.js';
import {showAlert} from './util.js';

getData((photos)=> {
  renderPhotos(photos);
  initListeners(photos);
},
showAlert);

initButtonHandlers();

changePhotoFilter();

setUserFormSubmit();

choseFile();
