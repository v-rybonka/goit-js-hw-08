import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  mail: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

const STORAGE_KEY = 'feedback-form';
let formValue = {};

populateTextarea();

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

function onFormSubmit(evt) {
  evt.preventDefault();
  const formElements = evt.target.elements;
  const mail = formElements.email.value;
  const message = formElements.message.value;

  const formData = {
    mail,
    message,
  };

  if (mail === '' || message === '') {
    return alert('Please fill in the fields');
  }
  evt.target.reset();
  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
}

function onFormInput(evt) {
  formValue[evt.target.name] = evt.target.value;

  const formValueJson = JSON.stringify(formValue);
  localStorage.setItem(STORAGE_KEY, formValueJson);
}

function populateTextarea() {
  if (localStorage.getItem(STORAGE_KEY)) {
    formValue = JSON.parse(localStorage.getItem(STORAGE_KEY));

    refs.mail.value = formValue.email ? formValue.email : '';
    refs.textarea.value = formValue.message ? formValue.message : '';
  }
}
