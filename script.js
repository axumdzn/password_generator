// Assignment Code
var generateBtn = document.querySelector("#generate");
var numOfCharacters;
var upperCase;
var lowerCase;
var numerals;
var specialChar;
var upperLetter = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerLetter = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numValue = ["1","2","3","4","5","6","7","8","9","0"];
var specChar = ["!","@","#","$","%","^","&","*","(",")"];
var finalArray = [];
var passArray = [];



function generatePassword() {
  // Gets number
  numOfCharacters = prompt("Number of Characters", "8");
  numOfCharacters = parseInt(numOfCharacters, 10);
  console.log(numOfCharacters);
  console.log(typeof numOfCharacters);

  // Makes sure number is in range
  if(numOfCharacters <= 7 ||  numOfCharacters >= 129 || isNaN(numOfCharacters)) { 
    window.alert("Characters must be between 8 and 128");
    generatePassword();
  }

  // Boolean to decide what is in the password
  lowerCase = confirm("Do you want Lower Case letters? (Ok for Yes, Cancel for No)");
  upperCase = confirm("Do you want Upper Case letters? (Ok for Yes, Cancel for No)");
  numerals = confirm("Do you want Numbers? (Ok for Yes, Cancel for No)");
  specialChar = confirm("Do you want Special Characters? (Ok for Yes, Cancel for No)");

  //Checks to see if at least one unit is selected
  if(!(lowerCase || upperCase || numerals || specialChar)) {
    alert("No options are selected");
    return generatePassword();
  };
  // adds to random array
  if(lowerCase){
    finalArray= finalArray.concat(lowerLetter);
  }
  if(upperCase)
  {
    finalArray= finalArray.concat(upperLetter);
  }
  if(numerals)
  {
    finalArray= finalArray.concat(numValue);
  }
  if(specialChar)
  {
    finalArray= finalArray.concat(specChar);
  }

  //actually generating password
  for (let i = 0; i < numOfCharacters; i++) {
    passArray[i] = finalArray[Math.floor(Math.random()*finalArray.length)];
  }

  // to make sure one character of each area is we will add at least one of each character
  if(lowerCase){
    passArray[Math.floor(Math.random()*(passArray.length/4))] = lowerLetter[Math.floor(Math.random()*lowerLetter.length)];
  }
  if(upperCase)
  {
    passArray[Math.floor(Math.random()*((passArray.length/4)) + (Math.floor(passArray.length/4)))] = upperLetter[Math.floor(Math.random()*upperLetter.length)];
  }
  if(numerals)
  {
    passArray[Math.floor(Math.random()*((passArray.length/4)) + (Math.floor(passArray.length/2)))] = numValue[Math.floor(Math.random()*numValue.length)];
  }
  if(specialChar)
  {
    passArray[Math.floor(Math.random()*((passArray.length/4)) + (Math.floor(passArray.length*.75)))] = specChar[Math.floor(Math.random()*specChar.length)];
  }


  return passArray.join('');
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());