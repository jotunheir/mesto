import { Popup } from "./Popup";

export class PopupWithImage extends Popup {
  #popupImage;
  #popupCaption;

  constructor(popupSelector) {
    super(popupSelector);
    this.#popupImage = this._popupElement.querySelector('.popup__image');
    this.#popupCaption = this._popupElement.querySelector('.popup__title_card');
  }

  open(data) {
    this.#popupImage.src = data.link;
    this.#popupImage.alt = data.name;
    this.#popupCaption.textContent = data.name;
    super.open();
}
}
