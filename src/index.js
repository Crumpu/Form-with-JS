'use strict';

const divContainer = document.createElement('div');
divContainer.setAttribute('class', 'cont');
document.body.appendChild(divContainer);

// header

const header = document.createElement('header');
divContainer.appendChild(header);

const H1 = document.createElement('h1');
H1.textContent = 'CREATE AN ACCOUNT';
header.appendChild(H1);

const paragraph = document.createElement('p');
paragraph.textContent = 'We always keep you name and email address private';
header.appendChild(paragraph);

// main

const main = document.createElement('main');
divContainer.appendChild(main);

// form

const myForm = document.createElement('form');
main.appendChild(myForm);

// Container with text inputs ============================================

const textContainer = document.createElement('div');
textContainer.setAttribute('class', 'textContainer');
myForm.appendChild(textContainer);

// first name

const fName = document.createElement('div');
textContainer.appendChild(fName);
const fNameInput = document.createElement('input');
fNameInput.setAttribute('type', 'text');
fNameInput.setAttribute('id', 'fName');
fNameInput.setAttribute('placeholder', 'First name');
fNameInput.setAttribute('required', 'required');
fName.appendChild(fNameInput);

// Last name

const lName = document.createElement('div');
textContainer.appendChild(lName);
const lNameInput = document.createElement('input');
lNameInput.setAttribute('type', 'text');
lNameInput.setAttribute('id', 'lName');
lNameInput.setAttribute('placeholder', 'Last name');
lNameInput.setAttribute('required', 'required');
lName.appendChild(lNameInput);

// Display name

const dName = document.createElement('div');
textContainer.appendChild(dName);
const dNameInput = document.createElement('input');
dNameInput.setAttribute('type', 'text');
dNameInput.setAttribute('id', 'dName');
dNameInput.setAttribute('placeholder', 'Display name');
dNameInput.setAttribute('required', 'required');
dName.appendChild(dNameInput);

// Email

const email = document.createElement('div');
textContainer.appendChild(email);
const emailInput = document.createElement('input');
emailInput.setAttribute('type', 'email');
emailInput.setAttribute('id', 'email');
emailInput.setAttribute('placeholder', 'Email');
emailInput.setAttribute('required', 'required');
email.appendChild(emailInput);

// password & password confirm

const password = document.createElement('div');
textContainer.appendChild(password);
const passInput = document.createElement('input');
passInput.setAttribute('type', 'password');
passInput.setAttribute('id', 'password');
passInput.setAttribute('placeholder', 'Password');
passInput.setAttribute('required', 'required');
passInput.setAttribute('minlength', '8');
password.appendChild(passInput);

const passwordConfirm = document.createElement('div');
textContainer.appendChild(passwordConfirm);
const passConfInput = document.createElement('input');
passConfInput.setAttribute('type', 'password');
passConfInput.setAttribute('id', 'password');
passConfInput.setAttribute('placeholder', 'Password confirm');
passConfInput.setAttribute('required', 'required');
passConfInput.setAttribute('minlength', '8');
passwordConfirm.appendChild(passConfInput);

// =======================================================================

// Radio button div ======================================================

const divBtn = document.createElement('div');
divBtn.setAttribute('class', 'btn');
myForm.appendChild(divBtn);

// Radio button 1 (for bayer)

// div for radio button 1 ----------------------------
const divButtons1 = document.createElement('div');
divButtons1.setAttribute('class', 'buttons');
divBtn.appendChild(divButtons1);

//Button for bayer

const radioInputBayer = document.createElement('input');
radioInputBayer.setAttribute('type', 'radio');
radioInputBayer.setAttribute('name', 'acType');
radioInputBayer.setAttribute('id', 'bayer');
divButtons1.appendChild(radioInputBayer);

//div with label

const divInRadio1 = document.createElement('div');
divButtons1.appendChild(divInRadio1);

// Label

const labelBayer = document.createElement('label');
labelBayer.setAttribute('for', 'bayer');
labelBayer.textContent = 'Join As a Buyer';
divInRadio1.appendChild(labelBayer);

const pForBayer = document.createElement('p');
pForBayer.textContent =
  'I am looking for a Name, Logo or Tagline my bussines, brand or product';
divInRadio1.appendChild(pForBayer);

//-------------------------------------------------------

// Radio button 2 (for seller)

// div for radio button 2 ----------------------------
const divButtons2 = document.createElement('div');
divButtons2.setAttribute('class', 'buttons');
divBtn.appendChild(divButtons2);

//Button for seller

const radioInputSeller = document.createElement('input');
radioInputSeller.setAttribute('type', 'radio');
radioInputSeller.setAttribute('name', 'acType');
radioInputSeller.setAttribute('id', 'seller');
divButtons2.appendChild(radioInputSeller);

//div with label

const divInRadio2 = document.createElement('div');
divButtons2.appendChild(divInRadio2);

// Label

const labelSeller = document.createElement('label');
labelSeller.setAttribute('for', 'bayer');
labelSeller.textContent = 'Join As a Creative or Marketplace Seller';
divInRadio2.appendChild(labelSeller);

const pForSeller = document.createElement('p');
pForSeller.textContent =
  'I plan to submit name ideas, Logo designs or sell names in Domain Marketplace';
divInRadio2.appendChild(pForSeller);

//================================================================================

// Checkbox ======================================================================

const divCheckBox = document.createElement('div');
divCheckBox.setAttribute('class', 'buttons checkbox');
divBtn.appendChild(divCheckBox);

// // Input CheckBox

const inputCheckBox = document.createElement('input');
inputCheckBox.setAttribute('type', 'checkbox');
inputCheckBox.setAttribute('name', 'chb');
inputCheckBox.setAttribute('id', 'chb');
divCheckBox.appendChild(inputCheckBox);

// // label CheckBox

const labelCheckBox = document.createElement('label');
labelCheckBox.setAttribute('for', 'chb');
labelCheckBox.textContent =
  'Allow Squadhelp to send marketing/promotional offers from time to time';
divCheckBox.appendChild(labelCheckBox);

//================================================================================

//Button create account

const divCreateAccount = document.createElement('div');
divCreateAccount.setAttribute('class', 'btnCreate');
myForm.appendChild(divCreateAccount);

const buttonCreateAccount = document.createElement('button');
buttonCreateAccount.setAttribute('type', 'submit');
buttonCreateAccount.textContent = 'Create account';
divCreateAccount.appendChild(buttonCreateAccount);
