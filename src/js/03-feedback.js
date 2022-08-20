import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const mail = document.querySelector('.feedback-form input');
const textarea = document.querySelector('.feedback-form textarea');

const formData = {};

populateTextarea();

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem('feedback');
}

function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;
  console.log(formData);
  const formDataJson = JSON.stringify(formData);
  console.log(formDataJson);
  localStorage.setItem('feedback', formDataJson);
}

function populateTextarea(evt) {
  const saveFormValue = JSON.parse(localStorage.getItem('feedback'));
  if (saveFormValue) {
    console.log(saveFormValue);
    textarea.value = saveFormValue.message;
    mail.value = saveFormValue.email;
  }
}
