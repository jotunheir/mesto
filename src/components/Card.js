export class Card {
  #data;
  #ownerId;
  #userId;
  #likes;
  #placeElement;
  #templateSelector;
  #handleClickLike
  #handleClickDelete
  #handleClickCard;
  #placeTitle;
  #placeImage;
  #placeLike;
  #placeLikeCounter
  #placeTrash;

  constructor({ data, userId, handleClickLike, handleClickDelete, handleClickCard }, templateSelector) {
    this.#data = data;
    this.#ownerId = data.owner._id;
    this.#userId = userId;
    this.#likes = data.likes;
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

  isLiked() {
    return this.#placeLike.classList.contains('place__like_active');
  }

  likeCard(counter) {
    this.#likes = this.#data.likes;
    this.#placeLike.classList.toggle('place__like_active');
    this.#placeLikeCounter.textContent = counter;
  }

  showActiveLikes() {
    this.#likes.forEach((like) => {
      if (like._id === this.#userId) {
        this.#placeLike.classList.add('place__like_active');
      }
    });
  }

  showTrash() {
    if (!(this.#ownerId === this.#userId)) {
      this.#placeTrash.classList.toggle('place__trash_hidden');
    }
  }

  deleteCard() {
    this.#placeElement.remove();
    this.#placeElement = null;
  }

  getCardId() {
    return this.#data._id;
  }

  getCardsData() {
    const { name, _id, link } = this.#data;
    return { name, _id, link };
  }

  createCardElement() {
    this.#placeElement = this.#getTemplate();

    this.#placeTitle = this.#placeElement.querySelector('.place__title');
    this.#placeImage = this.#placeElement.querySelector('.place__image');
    this.#placeLike = this.#placeElement.querySelector('.place__like');
    this.#placeLikeCounter = this.#placeElement.querySelector('.place__like-count');
    this.#placeTrash = this.#placeElement.querySelector('.place__trash');

    this.#placeTitle.textContent = this.#data.name;
    this.#placeImage.src = this.#data.link;
    this.#placeImage.alt = this.#data.name;
    this.#placeLikeCounter.textContent = this.#likes.length;
    this.showActiveLikes();
    this.showTrash();
    this.#setEventListeners();

    return this.#placeElement;
  };
}
