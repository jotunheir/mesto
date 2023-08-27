import { Popup } from "./Popup";

export class PopupWithImage extends Popup {
  #popupImage;
  #popupCaption;

  constructor(popupSelector) {
    super(popupSelector);
    this.#popupImage = this._popupElement.querySelector('.popup__image');
    this.#popupCaption = this._popupElement.querySelector('.popup__title_card');
  }

  open = (cardData) => {
    this.#popupImage.src = cardData.link;
    this.#popupImage.alt = cardData.name;
    this.#popupCaption.textContent = cardData.name;
    super.open();
  }
}
