const showInputError = (inputElement, errorElement, configValidation) => {
  inputElement.classList.add(configValidation.inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
};

const hideInputError = (inputElement, errorElement, configValidation) => {
  inputElement.classList.remove(configValidation.inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
};

const checkInputValidity = (inputElement, formElement, configValidation) => {
  const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
  console.log(errorElement);
  (!inputElement.validity.valid) ? showInputError(inputElement, errorElement, configValidation) : hideInputError(inputElement, errorElement, configValidation);

};

const disableButton = (buttonElement, configValidation) => {
  buttonElement.disabled = true;
  buttonElement.classList.add(configValidation.inactiveButtonClass);
}

const enableButton = (buttonElement, configValidation) => {
  buttonElement.disabled = false;
  buttonElement.classList.remove(configValidation.inactiveButtonClass)
};

const toggleButtonState = (buttonElement, isActive, configValidation) => {
  if (!isActive) {
    disableButton(buttonElement, configValidation);
  } else {
    enableButton(buttonElement, configValidation);
  }
};

const setEventListeners = (formElement, configValidation) => {
  const inputList = Array.from(formElement.querySelectorAll(configValidation.inputSelector));
  const buttonElement = formElement.querySelector(configValidation.submitButtonSelector);

  toggleButtonState(buttonElement, formElement.checkValidity(), configValidation);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      toggleButtonState(buttonElement, formElement.checkValidity(), configValidation);
      checkInputValidity(inputElement, formElement, configValidation);
    });
  });

  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
});
};

const enableValidation = (configValidation) => {
  const formList = Array.from(document.querySelectorAll(configValidation.formSelector));
  formList.forEach((formElement) => {
    setEventListeners(formElement, configValidation);
});
}

enableValidation(configValidation);
