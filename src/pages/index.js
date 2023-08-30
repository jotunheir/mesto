import './index.css';

import {
  configValidation,
  configAPI,
  profileEditButton,
  editFormElement,
  nameInput,
  aboutInput,
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

// API

const api = new Api(configAPI);



// Section

const sectionInsatce = new Section(renderCard, '.places');

function renderCard({ data, position = 'append' }) {
  const cardElement = new Card({ data, handleClickCard }, '#card').createCardElement();
  sectionInsatce.addItem(cardElement, position)
};

api.getInitialCards().then(cardsData => sectionInsatce.renderItems(cardsData));

// UserInfo

const userInfo = new UserInfo({ nameProfileSelector: '.profile__name', aboutProfileSelector: '.profile__about' });

// Profile

const popupProfileFormInstance = new PopupWithForm('.popup_edit-profile', handleSubmitProfile);
popupProfileFormInstance.setEventListeners();

function handleSubmitProfile(inputValues) {
  userInfo.setUserInfo(inputValues);
  popupProfileFormInstance.close();
};

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

// Place

const popupAddFormInstance = new PopupWithForm('.popup_add-place', handleSubmitCard);
popupAddFormInstance.setEventListeners();

cardAddButton.addEventListener('click', () => {
  popupAddFormInstance.open();
  validateCard.disableButton();
});

function handleSubmitCard() {

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

function handleClickCard(data) {
  popupImageInstace.open(data);
};
