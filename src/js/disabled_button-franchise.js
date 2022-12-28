function disableField() {
    const invalidForm = document.querySelector('.franchise-form:invalid');
    const submitBtn = document.querySelectorAll('.franchise-button');
    submitBtn.forEach(form => {
        if (invalidForm) {
            form.setAttribute('disabled', true);
          } else {
            form.disabled = false;
          }
    });
   
 }
  disableField();
 const inputs = document.getElementsByTagName("input");
  for (let input of inputs) {
    input.addEventListener('change', disableField);
  }