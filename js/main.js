import './form_validator.js';
import { changePhotoFilter } from './effects_sliders.js';
import {closeBigPicture , openPhotoEdit, closeFileUpload, loadMorePictures, photoScale} from './buttons.js';
import {createPhotos} from './data.js';
import {renderPhotos} from './random_user_image.js';

const photos = createPhotos();
renderPhotos(photos);


closeBigPicture();
openPhotoEdit();
closeFileUpload();
loadMorePictures();
photoScale();
changePhotoFilter();
