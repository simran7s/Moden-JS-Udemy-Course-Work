// Form Blur event listens
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName() {
  const name = document.getElementById('name');
  const re = /^[A-Za-z]{2,16}(\s)?([A-Za-z]{2,16})*$/;

  if (!re.test(name.value)) {
    // if invalid
    name.classList.add('is-invalid');
  } else {
    name.classList.remove('is-invalid');
  }
}

function validateEmail() {
  const email = document.getElementById('email');
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if (!re.test(email.value)) {
    // if invalid
    email.classList.add('is-invalid');
  } else {
    email.classList.remove('is-invalid');
  }
}

function validatePhone() {
  const phone = document.getElementById('phone')
  const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

  if (!re.test(phone.value)) {
    // if invalid
    phone.classList.add('is-invalid');
  } else {
    phone.classList.remove('is-invalid');
  }
}

function validateZip() {
  const zip = document.getElementById('zip')
  const re = /^([a-z][0-9][a-z])(\s)?([0-9][a-z][0-9])$/i;

  if (!re.test(zip.value)) {
    // if invalid
    zip.classList.add('is-invalid');
  } else {
    zip.classList.remove('is-invalid');
  }
}