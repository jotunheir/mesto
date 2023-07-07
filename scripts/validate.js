const showInputError = (inputElement, errorElement) => {
  inputElement.classList.add('popup__input_state_invalid');
  errorElement.textContent = inputElement.validationMessage;
};

const hideInputError = (inputElement, errorElement) => {
  inputElement.classList.remove('popup__input_state_invalid');
  errorElement.textContent = inputElement.validationMessage;
};

const checkInputValidity = (inputElement, formElement) => {
  let errorElement = formElement.querySelector(`#${inputElement.name}-error`);
  console.log(errorElement);
  (!inputElement.validity.valid) ? showInputError(inputElement, errorElement) : hideInputError(inputElement, errorElement);

};

const disableButton = (buttonElement) => {
  buttonElement.disabled = 'disabled';
  buttonElement.classList.add('popup__save-button_invalid');
}

const enableButton = (buttonElement) => {
  buttonElement.disabled = false;
  buttonElement.classList.remove('popup__save-button_invalid')
};

const toggleButtonState = (buttonElement, isActive) => {
  if (!isActive) {
    disableButton(buttonElement);
  } else {
    enableButton(buttonElement);
  }
};

const setEventListeners = (formElement) => {
  let inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  const buttonElement = formElement.querySelector('.popup__save-button');

  toggleButtonState(buttonElement, formElement.checkValidity());

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      toggleButtonState(buttonElement, formElement.checkValidity());
      checkInputValidity(inputElement, formElement);
    });
  });

  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
});
};

const enableValidation = () => {
  let formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach((formElement) => {
    setEventListeners(formElement);
});
}

config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__input_state_invalid',
  inputErrorClass: 'popup__input_state_invalid',
  errorClass: 'popup__input-error'
};

enableValidation(config);
