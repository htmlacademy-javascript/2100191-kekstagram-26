const getDataFrom = 'https://26.javascript.pages.academy/kekstagram/data';
const sendDataTo = 'https://26.javascript.pages.academy/kekstagram';

const getData = (onSuccess, onFail) => {
  fetch(getDataFrom)
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
    sendDataTo,
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
