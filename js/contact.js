const userName    = document.getElementById('name');
const nameError   = document.getElementById('name-error');
const userEmail   = document.getElementById('email');
const emailError  = document.getElementById('email-error');


function nameValid(value) {
const pattern = /^[a-zA-Z\- áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]+$/;
return pattern.test(value);
}

function emailValid(value) {
  const pattern = /^([a-z0-9.]+)@([a-z0-9]+)\.+([a-z]{1,4})$/;
  return pattern.test(value);
}

userName.addEventListener('input', function(e) {
  const value = e.target.value; 
  if(!nameValid(value)){
    nameError.style.display = 'inline';
  }
  else {
    nameError.style.display = 'none';
  }
})

userEmail.addEventListener('input', function(e) {
  const value = e.target.value; 
  if(!emailValid(value)){
    emailError.style.display = 'inline';
  }
  else {
    emailError.style.display = 'none';    
  }
})