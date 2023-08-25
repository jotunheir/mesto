import { Popup } from "./Popup";

export class PopupWithForm extends Popup {
  #popupElement;
  #submitHandler;
  #popupInput;
  #inputList;

  constructor(popupSelector, submitHandler) {
    super(popupSelector);
    this.#popupElement = document.querySelector(popupSelector);
    this.#submitHandler = submitHandler;
    this.#popupInput = this.#popupElement.querySelector('.popup__input');
    this.#inputList = Array.from(this.#popupElement.querySelectorAll('.popup__input'));
  }

  _getInputValues() {
    const values = {};
    this.#inputList.forEach((input) => {
      values[input.name] = input.value;
    });
    return values;
  }

  close() {
    super.close();
    this.#popupInput.form.reset();
  }

  setEventListeners() {
    super.setEventListeners();

    this.#popupElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.#submitHandler(this._getInputValues());
    });
  }
}
