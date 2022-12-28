function disableField() {
    const invalidForm = document.querySelector('.form:invalid');
    const submitBtn = document.querySelectorAll('.buy-button');
    submitBtn.forEach(form => {
        if (invalidForm) {
            form.setAttribute('disabled', true);
          } else {
            form.disabled = false;
          }
    });
   
  }
  disableField();
  const forms = document.getElementsByTagName("form");
  for (let form of forms) {
    form.addEventListener('change', disableField);
  }