let userName    = document.getElementById('name');
let nameError   = document.getElementById('name-error');
let userEmail   = document.getElementById('email');
let emailError  = document.getElementById('email-error');

function nameValid(value) {
let pattern = /^[a-zA-Z\- áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]+$/;
return pattern.test(value);
}

function emailValid(value) {
  let pattern = /^([a-z0-9.]+)@([a-z0-9]+)\.+([a-z]{1,4})$/;
  return pattern.test(value);
}

userName.addEventListener('input', function(e) {
  let value = e.target.value; 
  if(!nameValid(value)){
    nameError.style.display = 'inline';
  }
  else {
    nameError.style.display = 'none';
  }
})

userEmail.addEventListener('change', function(e) {
  let value = e.target.value; 
  if(!emailValid(value)){
    emailError.style.display = 'inline';
  }
  else {
    emailError.style.display = 'none';    
  }
})