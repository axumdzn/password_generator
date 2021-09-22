// Assignment Code
var generateBtn = document.querySelector("#generate");
var numOfCharacters;
var upperCase;
var lowerCase;
var numerals;
var specialChar;

function generatePassword() {
  // Gets number
  numOfCharacters = prompt("Number of Characters", "8");
  numOfCharacters = parseInt(numOfCharacters, 10);

  // Makes sure number is in range
  if(numOfCharacters < 8 ||  numOfCharacters > 128) { 
    window.alert("Characters must be between 8 and 128");
    generatePassword();
  }

  // Boolean to decide what is in the password
  lowerCase = confirm("Do you want Lower Case letters? (Ok for Yes, Cancel for No)");
  UpperCase = confirm("Do you want Upper Case letters? (Ok for Yes, Cancel for No)");
  numerals = confirm("Do you want Numbers? (Ok for Yes, Cancel for No)");
  specialChar = confirm("Do you want Special Characters? (Ok for Yes, Cancel for No)");

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());