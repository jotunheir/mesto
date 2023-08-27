export class Popup {
  _popupElement;

  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
  }

  open() {
    this._popupElement.classList.add('popup_opened');
    document.addEventListener('keydown', this.#handleEscClose);
  }

  close() {
    this._popupElement.classList.remove('popup_opened');
    document.removeEventListener('keydown', this.#handleEscClose);
  }

  #handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
    this._popupElement.addEventListener('mousedown', (evt) => {
      if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__close-button')) {
        this.close();
      }
    });
  }
}

