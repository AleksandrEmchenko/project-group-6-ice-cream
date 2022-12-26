
function disableField() {
  const invalidForm = document.querySelector('.franchise__input:invalid');
  const submitBtn = document.getElementById('submit');
  if (invalidForm) {
    submitBtn.setAttribute('disabled', true);
  } else {
    submitBtn.disabled = false;
  }
}

disableField();

const inputs = document.getElementsByTagName("input");
for (let input of inputs) {
  input.addEventListener('change', disableField);
}