function disableField() {
  const invalidForm = document.querySelector('.common__input:invalid');
  const submitBtn = document.getElementById('submitbutton');
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
