import { placesArray, configValidation } from "./constants.js";
import { FormValidator } from "./FormValidator.js";
import { Card } from "./Card.js";

const popups = document.querySelectorAll('.popup');

//КОНСТАНТЫ: профиль
const openEditButton = document.querySelector('.profile__edit-button');

const popupEdit = document.querySelector('.popup_edit-profile');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

const editFormElement = document.querySelector('.popup__edit-form');
const nameInput = document.querySelector('.popup__input_description_name');
const aboutInput = document.querySelector('.popup__input_description_about');

//КОНСТАНТЫ: карточки мест, добавление места, открытие фотографии
const openAddButton = document.querySelector('.profile__add-button');
const addButton = document.querySelector('.popup__create-button');
const fullPopup = document.querySelector('.popup_card');
const fullImage = document.querySelector('.popup__image');
const fullTitle = document.querySelector('.popup__title_card');

const popupAdd = document.querySelector('.popup_add-place');
const formAddElement = document.querySelector('.popup__add-form');
const placeInput = document.querySelector('.popup__input_description_place');
const linkInput = document.querySelector('.popup__input_description_link');

const placesContainer = document.querySelector('.places');

//ФУНКЦИИ: открытие/закрытие поп-апов
const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
}

const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
}

const closePopupEsc = (evt) => {
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  }
};

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

const likePlace = (cardLike) => {
  cardLike.classList.toggle('place__like_active');
}

const deletePlace = (cardElement) => {
  cardElement.remove();
};

const openPlace = (cardData) => {
  fullImage.src = cardData.link;
  fullImage.alt = cardData.name;
  fullTitle.textContent = cardData.name;
  openPopup(fullPopup);

}

const renderCards = (data, container, position = 'append') => {
  const cardElement = new Card({ data, openPlace, deletePlace, likePlace }, '#card').createCardElement();
  switch (position) {
    case "append":
      container.append(cardElement);
      break;
    case "prepend":
      container.prepend(cardElement);
      break;
    default:
      break;
  }
}

placesArray.forEach((card) => {
  renderCards(card, placesContainer);
});

const handleAddFormSubmit = (evt) => {
  evt.preventDefault();

  const item = {
    name: placeInput.value,
    link: linkInput.value,
  };

  renderCards(item, placesContainer, 'prepend');
  closePopup(popupAdd);
  formAddElement.reset();
}

//СЛУШАТЕЛИ: профиль
openEditButton.addEventListener('click', () => {
  openPopup(popupEdit);
  handleInfo();
});
editFormElement.addEventListener('submit', handleEditFormSubmit);

//СЛУШАТЕЛИ: карточки мест, добавление места, открытие фотографии

openAddButton.addEventListener('click', () => {
  openPopup(popupAdd);
  validateCard.disableButton(addButton);
});

popupAdd.addEventListener('submit', handleAddFormSubmit);


//СЛУШАТЕЛИ: закрытие поп-апов по ESC и оверлеем

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__close-button')) {
      closePopup(evt.currentTarget);
    }
  });
})
