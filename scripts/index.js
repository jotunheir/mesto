// ПРОФИЛЬ

// Кнопки
let openEditButton = document.querySelector('.profile__edit-button');
let closeEditButton = document.querySelector('.popup__edit-close-button');

// Сайт
let popupEdit = document.querySelector('.popup_edit-profile');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');

// Попап
let formElement = document.querySelector('.popup__edit-form');
let nameInput = document.querySelector('.popup__input_description_name');
let aboutInput = document.querySelector('.popup__input_description_about');

// Открытие
let openEditPopup = () => {
  popupEdit.classList.add('popup_opened');
};

// Закрытие
let closeEditPopup = () => {
  popupEdit.classList.remove('popup_opened');
};

// Связка
let nameAbout = () => {
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
};

let handleFormSubmit = (evt) => {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;

  closeEditPopup();
};

// Слушатели
openEditButton.addEventListener('click', openEditPopup);
openEditButton.addEventListener('click', nameAbout);
formElement.addEventListener('submit', handleFormSubmit);
closeEditButton.addEventListener('click', closeEditPopup);

// КАРТОЧКИ и ПОЛНЫЕ ФОТО

// Кнопки
let openAddButton = document.querySelector('.profile__add-button');
let closeAddButton = document.querySelector('.popup__add-close-button');
let addButton = document.querySelector('popup__create-button');

let fullPopup = document.querySelector('.popup_card');
let fullImage = document.querySelector('.card__image');
let fullTitle = document.querySelector('.card__title');
let closeFullButton = document.querySelector('.popup__close-button_card');

// Форма
let popupAdd = document.querySelector('.popup_add-place');
let formAddElement = document.querySelector('.popup__add-form');
let placeInput = document.querySelector('.popup__input_description_place');
let linkInput = document.querySelector('.popup__input_description_link');

// Копирование шаблона
let placeTemplate = document.querySelector('#card').content;
let placesContainer = document.querySelector('.places');

// Массив
let placesArray = [
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

//Загрузка мест
let placeCard = (place) => {
  let placeElement = placeTemplate.querySelector('.place').cloneNode(true);

  let placeTitle = placeElement.querySelector('.place__title');
  let placeImage = placeElement.querySelector('.place__image');
  let placeLike = placeElement.querySelector('.place__like');
  let placeTrash = placeElement.querySelector('.place__trash');

  placeTitle.textContent = place.name;
  placeImage.src = place.link;
  placeImage.alt = place.name;

  let likePlace = () => {
    placeLike.classList.toggle('place__like_active');
  }

  let deletePlace = () => {
    placeElement.remove();
  };

  placeLike.addEventListener('click', likePlace);
  placeTrash.addEventListener('click', deletePlace);

  placeImage.addEventListener('click', () => {
    fullImage.src = place.link;
    fullImage.alt = place.name;
    fullTitle.textContent = place.name;
    fullPopup.classList.add('popup_opened');
  });

  return placeElement;
};

placesArray.forEach((card) => {
  let element = placeCard(card);
  placesContainer.append(element);
});

// Добавление места
let handleAddSubmit = (evt) => {
  evt.preventDefault();

  let item = {
    name: placeInput.value,
    link: linkInput.value,
  };

  placesContainer.prepend(placeCard(item))
  closeAddPopup();
}

// Открытие/закрытие
let openAddPopup = () => {
  popupAdd.classList.add('popup_opened');
}

let closeAddPopup = () => {
  popupAdd.classList.remove('popup_opened');
}

let closeFullImage = () => {
  fullPopup.classList.remove('popup_opened');
}

// Слушатели
openAddButton.addEventListener('click', openAddPopup);
closeAddButton.addEventListener('click', closeAddPopup);
popupAdd.addEventListener('submit', handleAddSubmit);

closeFullButton.addEventListener('click', closeFullImage);
