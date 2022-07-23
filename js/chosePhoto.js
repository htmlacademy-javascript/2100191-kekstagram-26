const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const fileChooser = document.querySelector('#upload-file');
const preview = document.querySelector('.setup-user-pic');

const choseFile = () => {
  fileChooser.addEventListener('change', function onFileChose () {
    const file = fileChooser.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => {
      return fileName.endsWith(it);});

    if (matches) {
      preview.src = URL.createObjectURL(file);
    }
  });
};

export {choseFile};
