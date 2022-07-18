import './form_validator.js';
import {showAlert} from './util.js';
import {setUserFormSubmit} from './form_validator.js';
import {changePhotoFilter} from './effects_sliders.js';
import {getData} from './api.js';
import {closeBigPicture , openPhotoEdit, closeFileUpload, loadMorePictures, photoScale} from './buttons.js';
import {renderPhotos} from './random_user_image.js';

getData((photos)=> {renderPhotos(photos);},showAlert);

closeBigPicture();
openPhotoEdit();
closeFileUpload();
loadMorePictures();
photoScale();
changePhotoFilter();

setUserFormSubmit();
