import './form_validator.js';
import './effect_slider.js';
import {closeBigPicture , openPhotoEdit, closeFileUpload, loadMorePictures, photoScale} from './buttons.js';
import {createPhotos} from './data.js';
import {renderPhotos} from './random_user_image.js';
import {changePhotoFilter} from './effect_slider.js';

const photos = createPhotos();
renderPhotos(photos);


closeBigPicture();
openPhotoEdit();
closeFileUpload();
loadMorePictures();
photoScale();
changePhotoFilter();

import './form_validator.js';
import {closeBigPicture , openPhotoEdit, closeFileUpload, loadMorePictures} from './buttons.js';
import {createPhotos} from './data.js';
import {renderPhotos} from './random_user_image.js';

const photos = createPhotos();
renderPhotos(photos);


closeBigPicture();
openPhotoEdit();
closeFileUpload();
loadMorePictures();
