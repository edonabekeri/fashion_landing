let counter = 0;

function counterIncrement() {
  counter += 1;
  document.querySelector('.counter').innerHTML = `Clicked: ${counter}`;
}

const btn = document.getElementById('btn');
// btn.onclick = counterIncrement;
btn.addEventListener('click', counterIncrement);

const emailInput = document.getElementById('emailInput');

emailInput.addEventListener('keydown', function (event) {
  console.log(event.target.value);
  if (event.key === 'Enter') {
    alert(event.target.value);
  }
});

//me kqyr sintaksen
// emailInput.removeEventListener('click', function () {
//   console.log('remove');
// });

document.addEventListener('mousemove', function (e) {
  document.querySelector('.mouseX').innerHTML = `X: ${e.x}`;
  document.querySelector('.mouseY').innerHTML = `Y: ${e.y}`;
});

console.log('document', document);
console.log('window', window);

document.addEventListener('DOMContentLoaded', function (e) {
  console.log('dom loaded');
});

window.onload = function (e) {
  console.log('window loaded');
  document.querySelector('.loader').classList = 'loader';
};

const firstName = document.querySelector('#form1 input[name="fullName"]');
const email = document.querySelector('#form1 input[name="email"]');
const message = document.querySelector('#form1 textarea');
const form1 = document.getElementById('form1');

form1.addEventListener('submit', function (e) {
  firstName.style.borderColor = 'black';
  email.style.borderColor = 'black';
  message.style.borderColor = 'black';
  e.preventDefault();
  let isFirstNameValid = false,
    isEmailValid = false,
    isMessageValid = false;

  if (firstName.value !== '') {
    isFirstNameValid = true;
  }
  if (
    email.value !== '' &&
    email.value.includes('@') &&
    (email.value.endsWith('.com') || email.value.endsWith('.net'))
  ) {
    isEmailValid = true;
  }
  if (message.value !== '') {
    isMessageValid = true;
  }
  console.log('isFirstNameValid', isFirstNameValid);
  console.log('isEmailValid', isEmailValid);
  console.log('isMessageValid', isMessageValid);
  if (!isFirstNameValid) {
    firstName.style.borderColor = 'red';
  }
  if (!isEmailValid) {
    email.style.borderColor = 'red';
  }
  if (!isMessageValid) {
    message.style.borderColor = 'red';
  }
  if (isFirstNameValid && isEmailValid && isMessageValid) {
    e.submit();
  }
});

// const submitBtn = document.querySelector('#form1 input[type="submit"]');
// submitBtn.addEventListener('submit', function (e) {
//   e.preventDefault();
//   console.log('btn submit form clicked');
// });

document.getElementById('scrollToTop').addEventListener('click', scrollToTop);

function scrollToTop() {
  currentYOffset = self.pageYOffset;
  initYOffset = currentYOffset;

  var intervalId = setInterval(function () {
    currentYOffset -= initYOffset * 0.05;
    document.body.scrollTop = currentYOffset;
    document.documentElement.scrollTop = currentYOffset;

    if (self.pageYOffset == 0) {
      clearInterval(intervalId);
    }
  }, 20);
}
