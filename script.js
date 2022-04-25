// Assignment Code
var generateBtn = document.querySelector ('#generate');
// stingd
var passwordarray = [];
var lowercasestring = 'abcdefghijklmnopqrstuvwxyz';
var Uppercasestring = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var Symbolssting = '!#/$/%/&/*+‑';
var numberstring = '0123456789';
var passwordlenfinal = {};

// main funtion to generate password
const generatePassword = () => {
  // promt user to add password length
  getPasswordLength ();
  return createRandomPassword ();
};
//funtion to get password length and checkif bteween 8 and 128 cahacters it also check if is Number 
function getPasswordLength () {
  let passwordlen = prompt ('Please enter Password length');
  let passwordlenint = parseInt (passwordlen);
  passwordlenfinal = passwordlenint;
  if (isNaN (passwordlenint)) {
    alert ('please eneter a vaild number');
  }

  if (passwordlenint >= 8 && passwordlenint <= 128) {
    getPasswordCritera ();
    return passwordlenint;
  } else {
    alert ('please enter number between 8 and 128');
  }
}

// present 4 confim qestion
// return array in varible above 

function getPasswordCritera () {
  let uppercase = confirm ('would you like  to include Uppercase words ? ');
  let lowercase = confirm ('would you like  to include Lowercase words ? ');
  let Symbols = confirm ('would you like  to include Symbols words ? ');
  let numbers = confirm ('would you like  to include Numebers ? ');
  if (uppercase) {
    passwordarray.push (Uppercasestring);
  }
  if (lowercase) {
    passwordarray.push (lowercasestring);
  }
  if (Symbols) {
    passwordarray.push (Symbolssting);
  }
  if (numbers) {
    passwordarray.push (numberstring);
  }

  if (passwordarray.length === 0) {
    alert ('invalid input please select at least one option');
  } else {
    createRandomPassword ();
  }
}


//this is where the magic happens 
//from the function it grabs the lenght of required password then a uses that to repeats the length  to obatin each charecter 
//it then collected easch caharter  as an result
//when as return to the intial funtion  
function createRandomPassword () {
  let result = '';
  let number = passwordlenfinal;
  for (let i = 0; i < number; i++) {
    const element = Math.floor (Math.random () * passwordarray.length + 0);
    const characters = passwordarray[element];
    result += characters.charAt (
      Math.floor (Math.random () * characters.length)
    );
  }

  return result;
}

// Write password to generat random password
function writePassword () {
  var password = generatePassword ();
  var passwordText = document.querySelector ('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener ('click', writePassword);
