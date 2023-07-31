export class Card {
  #data;
  #placeElement;
  #templateSelector;
  #openPlace;
  #deletePlace;
  #likePlace;
  #placeTitle;
  #placeImage;
  #placeLike;
  #placeTrash;

  constructor({ data, openPlace }, templateSelector) {
    this.#data = data;
    this.#templateSelector = templateSelector;
    this.#openPlace = openPlace;

  }

  #getTemplate() {
    return document
      .querySelector(this.#templateSelector)
      .content.querySelector('.place').cloneNode(true)
  }

  #setEventListeners() {
    this.#placeLike.addEventListener('click', () => { this.likePlace(this.#placeLike) });
    this.#placeTrash.addEventListener('click', () => { this.deletePlace(this.#placeElement) });
    this.#placeImage.addEventListener('click', () => { this.#openPlace(this.#data) });
  }

  likePlace() {
    this.#placeLike.classList.toggle('place__like_active');
  }

  deletePlace() {
    this.#placeElement.remove();
  }

  createCardElement() {
    this.#placeElement = this.#getTemplate();

    this.#placeTitle = this.#placeElement.querySelector('.place__title');
    this.#placeImage = this.#placeElement.querySelector('.place__image');
    this.#placeLike = this.#placeElement.querySelector('.place__like');
    this.#placeTrash = this.#placeElement.querySelector('.place__trash');

    this.#placeTitle.textContent = this.#data.name;
    this.#placeImage.src = this.#data.link;
    this.#placeImage.alt = this.#data.name;

    this.#setEventListeners();

    return this.#placeElement;
  };
}