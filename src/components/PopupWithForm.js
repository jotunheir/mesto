import { Popup } from "./Popup";

export class PopupWithForm extends Popup {
  #submitHandler;
  #popupForm;
  #popupFormButton;
  #buttonText;
  #inputList;

  constructor(popupSelector, submitHandler, buttonText) {
    super(popupSelector);
    this.#submitHandler = submitHandler;
    this.#popupForm = this._popupElement.querySelector('.popup__form');
    this.#popupFormButton = this.#popupForm.querySelector('.popup__save-button');
    this.#buttonText = buttonText;
    this.#inputList = Array.from(this.#popupForm.querySelectorAll('.popup__input'));
  }

  #getInputValues() {
    const values = {};
    this.#inputList.forEach(input => {
      values[input.name] = input.value
    })
    return values;
  }

  loading(isLoading) {
    (isLoading)
    ? this.#popupFormButton.textContent = 'Загрузка...'
    : this.#popupFormButton.textContent = `${this.#buttonText}`
  }

  close() {
    super.close();
    this.#popupForm.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this.#popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.#submitHandler(this.#getInputValues());
    });
  }
}
