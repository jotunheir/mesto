import { Popup } from "./Popup";

export class PopupWithConfirmation extends Popup {
  #submitHandler;
  #popupForm;

  constructor(popupSelector, submitHandler) {
    super(popupSelector);
    this.#submitHandler = submitHandler;
    this.#popupForm = this._popupElement.querySelector('.popup__form');
  }

  setSubmitAction(action) {
    this.#submitHandler = action;
  }

  setEventListeners() {
    super.setEventListeners();
    this.#popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.#submitHandler();
    });
  }
}
