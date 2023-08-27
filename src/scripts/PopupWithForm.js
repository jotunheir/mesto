import { Popup } from "./Popup";

export class PopupWithForm extends Popup {
  #submitHandler;
  #popupForm;
  #inputList;
  #values;

  constructor(popupSelector, submitHandler) {
    super(popupSelector);
    this.#submitHandler = submitHandler;
    this.#popupForm = this._popupElement.querySelector('.popup__form');
    this.#inputList = Array.from(this.#popupForm.querySelectorAll('.popup__input'));
  }

  #getInputValues() {
    const values = {};
    this.#inputList.forEach(input => {
      values[input.name] = input.value
    })
    return values;
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
