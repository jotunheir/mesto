export class FormValidator {
  #data;
  #configValidation;
  #inputList;
  #buttonElement;

  constructor(data, configValidation) {
    this.#data = data;
    this.#configValidation = configValidation;
    this.#inputList = this.#data.querySelectorAll(this.#configValidation.inputSelector);
    this.#buttonElement = this.#data.querySelector(this.#configValidation.submitButtonSelector);
  }

  #showInputError(inputElement, errorElement) {
    inputElement.classList.add(this.#configValidation.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
  };

  #hideInputError(inputElement, errorElement) {
    inputElement.classList.remove(this.#configValidation.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
  };

  #checkInputValidity(inputElement, formElement) {
    const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
    (!inputElement.validity.valid) ?
    this.#showInputError(inputElement, errorElement) :
    this.#hideInputError(inputElement, errorElement);
  };

  disableButton = (buttonElement) => {
    buttonElement.disabled = true;
    buttonElement.classList.add(this.#configValidation.inactiveButtonClass);
  }

  #enableButton = (buttonElement) => {
    buttonElement.disabled = false;
    buttonElement.classList.remove(this.#configValidation.inactiveButtonClass)
  };

  #toggleButtonState = (buttonElement, isActive) => {
    if (!isActive) {
      this.disableButton(buttonElement);
    } else {
      this.#enableButton(buttonElement);
    }
  };

  enableValidation() {
    this.#toggleButtonState(this.#buttonElement, this.#data.checkValidity());

    this.#inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this.#toggleButtonState(this.#buttonElement, this.#data.checkValidity());
        this.#checkInputValidity(inputElement, this.#data);
      });
    });

    this.#data.addEventListener('submit', (evt) => {
      evt.preventDefault();
  });
  };

}
