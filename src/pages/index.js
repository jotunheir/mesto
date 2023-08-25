import './index.css';

import { Section } from '../scripts/Section';
import { PopupWithForm } from '../scripts/PopupWithForm';
import { placesArray, configValidation } from "../scripts/constants"
import { FormValidator } from "../scripts/FormValidator.js";
import { Card } from "../scripts/Card.js";
import { PopupWithImage } from '../scripts/PopupWithImage';

const popups = document.querySelectorAll('.popup');

//КОНСТАНТЫ: профиль
const profileEditButton = document.querySelector('.profile__edit-button');

const popupEdit = document.querySelector('.popup_edit-profile');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

const editFormElement = document.querySelector('.popup__edit-form');
const nameInput = document.querySelector('.popup__input_description_name');
const aboutInput = document.querySelector('.popup__input_description_about');

//КОНСТАНТЫ: карточки мест, добавление места, открытие фотографии
const cardAddButton = document.querySelector('.profile__add-button');
const cardCreateButton = document.querySelector('.popup__create-button');
const fullPopup = document.querySelector('.popup_card');
const fullImage = document.querySelector('.popup__image');
const fullTitle = document.querySelector('.popup__title_card');

const popupAdd = document.querySelector('.popup_add-place');
const formAddElement = document.querySelector('.popup__add-form');
const placeInput = document.querySelector('.popup__input_description_place');
const linkInput = document.querySelector('.popup__input_description_link');

//Секция
const sectionInsatce = new Section(renderCards, '.places');

function renderCards({data, position = 'append'}) {
  const cardElement = new Card({ data, handleCardClick }, '#card').createCardElement();
  sectionInsatce.addItem(cardElement, position)
};
sectionInsatce.renderItems(placesArray);

// Попап с картинкой
const popupImageInstace = new PopupWithImage('.popup_card');
popupImageInstace.setEventListeners();

function handleCardClick(data) {
  popupImageInstace.open(data);
}

//ФУНКЦИИ: открытие/закрытие поп-апов
// const openPopup = (popup) => {
//   popup.classList.add('popup_opened');
//   document.addEventListener('keydown', closePopupEsc);
// }

// const closePopup = (popup) => {
//   popup.classList.remove('popup_opened');
//   document.removeEventListener('keydown', closePopupEsc);
// }

// const closePopupEsc = (evt) => {
//   if (evt.key === 'Escape') {
//     const popup = document.querySelector('.popup_opened');
//     closePopup(popup);
//   }
// };

//ФУНКЦИИ: профиль

const validateProfile = new FormValidator(editFormElement, configValidation);
validateProfile.enableValidation();

const handleInfo = () => {
  const event = new Event("input");
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
  nameInput.dispatchEvent(event);
};

const handleEditFormSubmit = (evt) => {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;

  closePopup(popupEdit);
};

//ФУНКЦИИ: карточки мест, добавление места, открытие фотографии

const validateCard = new FormValidator(formAddElement, configValidation);
validateCard.enableValidation();

const openPlace = (cardData) => {
  fullImage.src = cardData.link;
  fullImage.alt = cardData.name;
  fullTitle.textContent = cardData.name;
  openPopup(fullPopup);

}

const handleAddFormSubmit = (evt) => {
  evt.preventDefault();


  const item = {
    name: placeInput.value,
    link: linkInput.value,
  };

  renderCards({ data: item, position: 'prepend' });
  closePopup(popupAdd);
  formAddElement.reset();
}



//СЛУШАТЕЛИ: профиль
profileEditButton.addEventListener('click', () => {
  openPopup(popupEdit);
  handleInfo();
});
editFormElement.addEventListener('submit', handleEditFormSubmit);

//СЛУШАТЕЛИ: карточки мест, добавление места, открытие фотографии

cardAddButton.addEventListener('click', () => {
  openPopup(popupAdd);
  validateCard.disableButton(cardCreateButton);
});

popupAdd.addEventListener('submit', handleAddFormSubmit);


//СЛУШАТЕЛИ: закрытие поп-апов по ESC и оверлеем

// popups.forEach((popup) => {
//   popup.addEventListener('mousedown', (evt) => {
//     if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__close-button')) {
//       closePopup(evt.currentTarget);
//     }
//   });
// })
