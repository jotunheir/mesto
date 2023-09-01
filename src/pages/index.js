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
} from "../utils/constants";

import { Api } from '../components/Api'
import { Section } from '../components/Section';
import { FormValidator } from "../components/FormValidator.js";
import { Card } from "../components/Card.js";
import { PopupWithImage } from '../components/PopupWithImage';
import { UserInfo } from '../components/UserInfo';
import { PopupWithForm } from '../components/PopupWithForm';
import { PopupWithConfirmation } from '../components/PopupWithConfirmation';

// API

const api = new Api(configAPI);

let userId;

Promise.all([api.getUserData(), api.getInitialCards()])
  .then(([userData, cardItems]) => {
    userInfo.setUserInfo(userData);
    userInfo.setUserAvatar(userData);
    userId = userData._id;

    sectionInsatce.renderItems(cardItems)
  })
  .catch((err) => console.log(err));

// Section

const sectionInsatce = new Section(renderCard, '.places');

function renderCard({ data, position = 'append' }) {
  const cardElement = new Card({ data, userId, handleClickLike, handleClickDelete, handleClickCard }, '#card').createCardElement();
  sectionInsatce.addItem(cardElement, position);
  return cardElement;
};

// UserInfo

const userInfo = new UserInfo({
  nameProfileSelector: '.profile__name',
  aboutProfileSelector: '.profile__about',
  avatarProfileSelector: '.profile__avatar'
});

// Profile

const popupProfileFormInstance = new PopupWithForm('.popup_edit-profile', handleSubmitProfile, 'Сохранить');
popupProfileFormInstance.setEventListeners();

function handleSubmitProfile(formData) {
  const dataProfile = { name: formData.name, about: formData.about };

  popupProfileFormInstance.loading(true);
  api.editUserProfile(dataProfile)
    .then(() => {
      userInfo.setUserInfo(dataProfile);
      popupProfileFormInstance.close()
    })
    .catch((err) => console.log(err))
    .finally(() => popupProfileFormInstance.loading(false));
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

const popupAvatarFormInstance = new PopupWithForm('.popup_edit-avatar', handleSubmitAvatar, 'Сохранить');
popupAvatarFormInstance.setEventListeners();

function handleSubmitAvatar(formData) {
  const avatarData = { avatar: formData.avatar }
  popupAvatarFormInstance.loading(true)
  api.editProfileAvatar(avatarData)
    .then(() => {
      avatarElement.src = avatarData.avatar;
      popupAvatarFormInstance.close()
    })
    .catch((err) => console.log(err))
    .finally(() => popupAvatarFormInstance.loading(false));
};

function openAvatarPopup() {
  popupAvatarFormInstance.open();
}

avatarEditButton.addEventListener('click', openAvatarPopup);

const validateAvatar = new FormValidator(avatarFormElement, configValidation);
validateAvatar.enableValidation();

// Place

const popupAddFormInstance = new PopupWithForm('.popup_add-place', handleSubmitCard, 'Создать');
popupAddFormInstance.setEventListeners();

cardAddButton.addEventListener('click', () => {
  popupAddFormInstance.open();
  validateCard.disableButton();
});

function handleSubmitCard(cardData) {
  popupAddFormInstance.loading(true);
  api.addNewCard(cardData)
    .then((res) => {
      renderCard({ data: res, position: 'prepend' });
      popupAddFormInstance.close();
    })
    .catch((err) => console.log(err))
    .finally(() => popupAddFormInstance.loading(false));

}

const validateCard = new FormValidator(addFormAdElement, configValidation);
validateCard.enableValidation();

// Place: functions

//like
function handleClickLike(cardElement) {
  if (cardElement.isLiked()) {
    api.unlikeCard(cardElement.getCardId())
      .then((res) => cardElement.likeCard(res.likes.length))
      .catch((err) => console.log(err));
  } else {
    api.likeCard(cardElement.getCardId())
      .then((res) => cardElement.likeCard(res.likes.length))
      .catch((err) => console.log(err));
  };
}

//delete
const popupWithConfirmationInstance = new PopupWithConfirmation('.popup_delete', handleClickDelete);
popupWithConfirmationInstance.setEventListeners();

function handleClickDelete(cardElement) {
  popupWithConfirmationInstance.open();
  popupWithConfirmationInstance.setSubmitAction(() => {
    popupWithConfirmationInstance.loading(true)
    api.removeCard(cardElement.getCardId())
      .then(() => {
        cardElement.deleteCard();
        popupWithConfirmationInstance.close()
      })
      .catch((err) => console.log(err))
      .finally(() => popupWithConfirmationInstance.loading(false))
  })
}

//open
function handleClickCard(data) {
  popupImageInstace.open(data);
};

// Image

const popupImageInstace = new PopupWithImage('.popup_card');
popupImageInstace.setEventListeners();
