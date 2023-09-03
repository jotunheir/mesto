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

// Avatar

export const avatarEditButton = document.querySelector('.profile__edit-avatar');
export const avatarFormElement = document.querySelector('.popup__edit-avatar-form');

// Place (constants)

export const cardAddButton = document.querySelector('.profile__add-button');
export const addFormAdElement = document.querySelector('.popup__add-form');
