import './index.css';

import {
  configValidation,
  configAPI,
  profileEditButton,
  editFormElement,
  nameInput,
  aboutInput,
  avatarElement,
  avatarEditButton,
  avatarFormElement,
  cardAddButton,
  addFormAdElement,
  placeInput,
  linkInput,
} from "../scripts/constants";

import { Api } from '../scripts/API';
import { Section } from '../scripts/Section';
import { FormValidator } from "../scripts/FormValidator.js";
import { Card } from "../scripts/Card.js";
import { PopupWithImage } from '../scripts/PopupWithImage';
import { UserInfo } from '../scripts/UserInfo';
import { PopupWithForm } from '../scripts/PopupWithForm';

// Card functions

function handleClickLike() {

}

function handleClickDelete(cardElement) {
  api.removeCard(cardElement.getCardId())
    .then(() => cardElement.deleteCard())
    .catch((err) => console.log(err));
}

function handleClickCard(data) {
  popupImageInstace.open(data);
};

// API

const api = new Api(configAPI);

// Section

const sectionInsatce = new Section(renderCard, '.places');

function renderCard({ data, position = 'append' }) {
  const cardElement = new Card({ data, handleClickLike, handleClickDelete, handleClickCard }, '#card').createCardElement();
  sectionInsatce.addItem(cardElement, position);
  return cardElement;
};

api.getInitialCards()
  .then(cardsData => sectionInsatce.renderItems(cardsData))
  .catch((err) => console.log(err));

// UserInfo

const userInfo = new UserInfo({ nameProfileSelector: '.profile__name', aboutProfileSelector: '.profile__about' });

api.getUserData()
  .then(userData => userInfo.setUserInfo(userData))
  .catch((err) => console.log(err));

// Profile

const popupProfileFormInstance = new PopupWithForm('.popup_edit-profile', handleSubmitProfile);
popupProfileFormInstance.setEventListeners();

function handleSubmitProfile(formData) {
  const dataProfile = { name: formData.name, about: formData.about };

  console.log(dataProfile);

  userInfo.setUserInfo(dataProfile);
  api.editUserProfile(dataProfile)
    .then(() => popupProfileFormInstance.close())
    .catch((err) => console.log(err));
}

function openProfilePopup() {
  const userData = userInfo.getUserInfo();
  nameInput.value = userData.name;
  aboutInput.value = userData.about;
  popupProfileFormInstance.open();
};

profileEditButton.addEventListener('click', () => {
  openProfilePopup();
  validateProfile.disableButton();
});

const validateProfile = new FormValidator(editFormElement, configValidation);
validateProfile.enableValidation();

// Avatar

api.getUserData()
  .then(userData => avatarElement.src = userData.avatar);

const popupAvatarFormInstance = new PopupWithForm('.popup__edit-avatar', handleSubmitAvatar);
popupAvatarFormInstance.setEventListeners();

function handleSubmitAvatar(formData) {
  const avatarData = { avatar: formData.link }

  api.editProfileAvatar(avatarData)
    .then(avatarElement.src = avatarData.avatar)
    .then(() => popupAvatarFormInstance.close())
    .catch((err) => console.log(err));
};

function openAvatarPopup() {
  popupAvatarFormInstance.open();
}

avatarEditButton.addEventListener('click', openAvatarPopup);

const validateAvatar = new FormValidator(avatarFormElement, configValidation);
validateAvatar.enableValidation();

// Place

const popupAddFormInstance = new PopupWithForm('.popup_add-place', handleSubmitCard);
popupAddFormInstance.setEventListeners();

cardAddButton.addEventListener('click', () => {
  popupAddFormInstance.open();
  validateCard.disableButton();
});

function handleSubmitCard(cardData) {
  api.addNewCard(cardData);

  const item = {
    name: placeInput.value,
    link: linkInput.value,
  };

  renderCard({ data: item, position: 'prepend' });
  popupAddFormInstance.close();
}

const validateCard = new FormValidator(addFormAdElement, configValidation);
validateCard.enableValidation();

// Image

const popupImageInstace = new PopupWithImage('.popup_card');
popupImageInstace.setEventListeners();
