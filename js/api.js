const GET_DATA_FROM = 'https://26.javascript.pages.academy/kekstagram/data';
const SEND_DATA_TO = 'https://26.javascript.pages.academy/kekstagram';


const getData = (onSuccess, onFail) => {
  fetch(GET_DATA_FROM)
    .then((response) => response.json())
    .then((photos) => {
      onSuccess(photos);
    })
    .catch(() => {
      onFail('Не удалось загрузить фотографии.Перезагрузите страницу');
    });
};


const sendData = (onSuccess, onFail, body) => {
  fetch(
    SEND_DATA_TO,
    {
      method: 'POST',
      body,
    }
  )
    .then((response) => {
      if (response.ok) {
        return onSuccess();
      }
      throw Error('Не удалось отправить форму. Попробуйте ещё раз');
    })
    .catch(() => {
      onFail('Не удалось отправить форму. Попробуйте ещё раз');
    });
};

export {getData, sendData};
