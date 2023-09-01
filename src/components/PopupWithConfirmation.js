import { Popup } from "./Popup";

export class PopupWithConfirmation extends Popup {
  #submitHandler;
  #popupForm;
  #popupFormButton;

  constructor(popupSelector, submitHandler) {
    super(popupSelector);
    this.#submitHandler = submitHandler;
    this.#popupForm = this._popupElement.querySelector('.popup__form');
    this.#popupFormButton = this.#popupForm.querySelector('.popup__save-button');
  }

  loading(isLoading) {
    (isLoading)
    ? this.#popupFormButton.textContent = 'Удаление...'
    : this.#popupFormButton.textContent = 'Да'
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
