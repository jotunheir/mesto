//КОНСТАНТЫ: профиль
const openEditButton = document.querySelector('.profile__edit-button');
const closeEditButton = document.querySelector('.popup__edit-close-button');

const popupEdit = document.querySelector('.popup_edit-profile');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

const formElement = document.querySelector('.popup__edit-form');
const nameInput = document.querySelector('.popup__input_description_name');
const aboutInput = document.querySelector('.popup__input_description_about');

//КОНСТАНТЫ: карточки мест, добавление места, открытие фотографии
const openAddButton = document.querySelector('.profile__add-button');
const closeAddButton = document.querySelector('.popup__add-close-button');
const addButton = document.querySelector('popup__create-button');
const fullPopup = document.querySelector('.popup_card');
const fullImage = document.querySelector('.popup__image');
const fullTitle = document.querySelector('.popup__title_card');
const closeFullButton = document.querySelector('.popup__close-button_card');

const popupAdd = document.querySelector('.popup_add-place');
const formAddElement = document.querySelector('.popup__add-form');
const placeInput = document.querySelector('.popup__input_description_place');
const linkInput = document.querySelector('.popup__input_description_link');

const placeTemplate = document.querySelector('#card').content;
const placesContainer = document.querySelector('.places');

//ФУНКЦИИ: открытие/закрытие поп-апов
const switchPopup = (popup) => {
  popup.classList.toggle('popup_opened');
};

//ФУНКЦИИ: профиль

const handleInfo = () => {
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
};

const handleEditFormSubmit = (evt) => {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;

  switchPopup(popupEdit);
};

//ФУНКЦИИ: карточки мест, добавление места, открытие фотографии
const createCardElement = (place) => {
  const placeElement = placeTemplate.querySelector('.place').cloneNode(true);

  const placeTitle = placeElement.querySelector('.place__title');
  const placeImage = placeElement.querySelector('.place__image');
  const placeLike = placeElement.querySelector('.place__like');
  const placeTrash = placeElement.querySelector('.place__trash');

  placeTitle.textContent = place.name;
  placeImage.src = place.link;
  placeImage.alt = place.name;

  const likePlace = () => {
    placeLike.classList.toggle('place__like_active');
  }

  const deletePlace = () => {
    placeElement.remove();
  };

  placeLike.addEventListener('click', likePlace);
  placeTrash.addEventListener('click', deletePlace);

  placeImage.addEventListener('click', () => {
    fullImage.src = place.link;
    fullImage.alt = place.name;
    fullTitle.textContent = place.name;
    switchPopup(fullPopup);

  });

  return placeElement;
};

placesArray.forEach((card) => {
  const element = createCardElement(card);
  placesContainer.append(element);
});

const handleAddFormSubmit = (evt) => {
  evt.preventDefault();

  const item = {
    name: placeInput.value,
    link: linkInput.value,
  };

  placesContainer.prepend(createCardElement(item))
  switchPopup(popupAdd);
}

//СЛУШАТЕЛИ: профиль
openEditButton.addEventListener('click', () => {
  switchPopup(popupEdit);
  handleInfo();
});
closeEditButton.addEventListener('click', () => switchPopup(popupEdit));
formElement.addEventListener('submit', handleEditFormSubmit);

// Слушатели: карточки мест, добавление места, открытие фотографии
openAddButton.addEventListener('click', () => switchPopup(popupAdd));
closeAddButton.addEventListener('click', () => switchPopup(popupAdd));
popupAdd.addEventListener('submit', handleAddFormSubmit);

closeFullButton.addEventListener('click', () => switchPopup(fullPopup));
