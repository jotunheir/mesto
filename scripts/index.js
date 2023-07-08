const popups = document.querySelectorAll('.popup')

//КОНСТАНТЫ: профиль
const openEditButton = document.querySelector('.profile__edit-button');

const popupEdit = document.querySelector('.popup_edit-profile');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

const editFormormElement = document.querySelector('.popup__edit-form');
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

const placeTemplate = document.querySelector('#card').content;
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
    openPopup(fullPopup);

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
  closePopup(popupAdd);
  formAddElement.reset();
}

//СЛУШАТЕЛИ: профиль
openEditButton.addEventListener('click', () => {
  openPopup(popupEdit);
  handleInfo();
});
editFormormElement.addEventListener('submit', handleEditFormSubmit);

//СЛУШАТЕЛИ: карточки мест, добавление места, открытие фотографии

openAddButton.addEventListener('click', () => {
  openPopup(popupAdd);
  disableButton(addButton);
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
