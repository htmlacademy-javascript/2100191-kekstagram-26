import {closeBP} from './bg_close_button.js';
import {createPhotos} from './data.js';
import {renderPhotos} from './random_user_image.js';
const photos = createPhotos();
renderPhotos(photos);
closeBP();

