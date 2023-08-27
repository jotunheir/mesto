export class Card {
  #data;
  #placeElement;
  #templateSelector;
  #handleClickCard;
  #placeTitle;
  #placeImage;
  #placeLike;
  #placeTrash;

  constructor({ data, handleClickCard }, templateSelector) {
    this.#data = data;
    this.#templateSelector = templateSelector;
    this.#handleClickCard = handleClickCard;
  }

  #getTemplate() {
    return document
      .querySelector(this.#templateSelector)
      .content.querySelector('.place').cloneNode(true)
  }

  #setEventListeners() {
    this.#placeLike.addEventListener('click', () => { this.likePlace(this.#placeLike) });
    this.#placeTrash.addEventListener('click', () => { this.deletePlace(this.#placeElement) });
    this.#placeImage.addEventListener('click', () => { this.#handleClickCard(this.#data) });
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
