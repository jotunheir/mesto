export class Card {
  #data;
  #placeElement;
  #templateSelector;
  #handleClickLike
  #handleClickDelete
  #handleClickCard;
  #placeTitle;
  #placeImage;
  #placeLike;
  #placeTrash;

  constructor({ data, handleClickLike, handleClickDelete, handleClickCard }, templateSelector) {
    this.#data = data;
    this.#templateSelector = templateSelector;
    this.#handleClickLike = handleClickLike;
    this.#handleClickDelete = handleClickDelete;
    this.#handleClickCard = handleClickCard;
  }

  #getTemplate() {
    return document
      .querySelector(this.#templateSelector)
      .content.querySelector('.place').cloneNode(true)
  }

  #setEventListeners() {
    this.#placeLike.addEventListener('click', () => { this.#handleClickLike(this) });
    this.#placeTrash.addEventListener('click', () => { this.#handleClickDelete(this) });
    this.#placeImage.addEventListener('click', () => { this.#handleClickCard(this.#data) });
  }

  removeCard() {
    this.#placeElement.remove();
    this.#placeElement = null;
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

  getCardId() {
    return this.#data._id;
  }

  getCardsData() {
    const { name, _id, link } = this.#data;
    return { name, _id, link };
  }
}
