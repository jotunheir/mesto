export const placesArray = [
  {
    name: 'Дагестан',
    link: 'https://cdn.discordapp.com/attachments/1104763297019986053/1104766162849513513/P1208939.jpg'
  },
  {
    name: 'Карелия',
    link: 'https://cdn.discordapp.com/attachments/1104763297019986053/1104793766306533447/A0A6538-R1-11-26.JPG'
  },
  {
    name: 'Эльбрус',
    link: 'https://cdn.discordapp.com/attachments/1104763297019986053/1104766160622329886/DSC_0115.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://cdn.discordapp.com/attachments/1104763297019986053/1104766162472017951/P1142606.jpg'
  },
  {
    name: 'Монголия',
    link: 'https://cdn.discordapp.com/attachments/1104763297019986053/1104766833422258336/000038670037.jpg'
  },
  {
    name: 'Подмосковье',
    link: 'https://cdn.discordapp.com/attachments/1104763297019986053/1104769445483790446/00000014.jpg'
  }
];

export const configValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_invalid',
  inputErrorClass: 'popup__input_state_invalid',
  errorClass: 'popup__input-error'
};

export const configAPI = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-73',
  headers: {
    authorization: '20caa1a6-6205-44fa-bd39-a6b3bb76afc6',
    "content-type": "application/json"
  }
};

// Profile (constants)

export const profileEditButton = document.querySelector('.profile__edit-button');

export const editFormElement = document.querySelector('.popup__edit-form');
export const nameInput = document.querySelector('.popup__input_description_name');
export const aboutInput = document.querySelector('.popup__input_description_about');

// Place (constants)

export const cardAddButton = document.querySelector('.profile__add-button');

export const addFormAdElement = document.querySelector('.popup__add-form');
export const placeInput = document.querySelector('.popup__input_description_place');
export const linkInput = document.querySelector('.popup__input_description_link');
