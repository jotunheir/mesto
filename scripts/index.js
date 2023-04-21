let openPopupButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closePopupButton = document.querySelector('.popup__close-button');

let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_description_name');
let aboutInput = document.querySelector('.popup__input_description_about');

let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');

function openPopup() {
  popup.classList.add('popup_opened');
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function nameAbout() {
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
}

function handleFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;

  closePopup();
}

openPopupButton.addEventListener('click', nameAbout);
formElement.addEventListener('submit', handleFormSubmit);
openPopupButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);
