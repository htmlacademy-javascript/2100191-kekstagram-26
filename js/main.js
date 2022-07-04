import './file-upload-validate.js';
import {closeBigPicture , openPhotoEdit, closeFileUpload} from './buttons.js';
import {createPhotos} from './data.js';
import {renderPhotos} from './random_user_image.js';

const photos = createPhotos();
renderPhotos(photos);


closeBigPicture();
openPhotoEdit();
closeFileUpload();
