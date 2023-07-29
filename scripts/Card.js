export class Card {
  #data;
  #placeElement;
  #templateSelector;
  #openPlace;
  #deletePlace;
  #likePlace;

  #getTemplate() {
    return document
      .querySelector(this.#templateSelector)
      .content.querySelector('.place').cloneNode(true)
  }

  constructor({ data, openPlace, deletePlace, likePlace }, templateSelector) {
    this.#data = data;
    this.#templateSelector = templateSelector;
    this.#openPlace = openPlace;
    this.#deletePlace = deletePlace;
    this.#likePlace = likePlace;
  }

  createCardElement() {
    this.#placeElement = this.#getTemplate();

    const placeTitle = this.#placeElement.querySelector('.place__title');
    const placeImage = this.#placeElement.querySelector('.place__image');
    const placeLike = this.#placeElement.querySelector('.place__like');
    const placeTrash = this.#placeElement.querySelector('.place__trash');

    placeTitle.textContent = this.#data.name;
    placeImage.src = this.#data.link;
    placeImage.alt = this.#data.name;

    placeLike.addEventListener('click', () => { this.#likePlace(placeLike) });
    placeTrash.addEventListener('click', () => { this.#deletePlace(this.#placeElement) });
    placeImage.addEventListener('click', () => { this.#openPlace(this.#data) });

    return this.#placeElement;
  };
}
