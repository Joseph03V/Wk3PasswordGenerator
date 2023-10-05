// Assignment Code
var generateBtn = document.querySelector("#generate"); //button

//generate password function
function generatePassword() {

//declare variables for the password criteria
var passwordCharacters = "";
var userCriteria = true;
var password = " ";
var passwordLength;
var uppercaseLetters ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseLetters ="abcdefghijklmnopqrstuvwxyz";
var numbers ="0123456789";
var specials ="!@#$%^&*()?{}[]";

//Get the desired length of the password
function getLength(){
  passwordLength = window.prompt("How long do you want the password? (Between 8 and 128)");
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Please enter a valid length. (8-128)");
    getLength();
  }
}
getLength();


//Get password criteria

  //uppercase letters criteria
  userCriteria = window.confirm("Do you want Uppercase Letters?");
  if (userCriteria === false) {
    window.alert("Okay! No Uppercase!");
  }else{
    passwordCharacters += uppercaseLetters;
  }

  //lowercase letters criteria
  userCriteria = window.confirm("Do you want Lowercase Letters?");
  if (userCriteria === false) {
    window.alert("Okay! No Lowercase!");
  } else{
    passwordCharacters += lowercaseLetters;
  }

  //numbers criteria
  userCriteria = window.confirm("Do you want Numbers?");
  if (userCriteria === false) {
    window.alert("Okay! No Numbers!");
  }else{
    passwordCharacters += numbers;
  }

  //special character criteria
  userCriteria = window.confirm("Do you want Special Characters?");
  if (userCriteria === false) {
    window.alert("Okay! No Special Characters!");
  }else{
    passwordCharacters += specials;
  }

  //in case user has selected no criteria at all
  if (passwordCharacters === ""){
    window.alert("YOU SELECTED NOTHING WHAT AM I \nSUPPOSED TO DO WITH THAT \nTRY AGAIN!");
    generatePassword();
  }

  //generate the actual password

  // hey look Derick I used ++i instead of i++!!!!!!!!!!!!
  // hey look Derick I used ++i instead of i++!!!!!!!!!!!!
  // hey look Derick I used ++i instead of i++!!!!!!!!!!!!
  for(i=0; i<passwordLength; ++i) {
    password += passwordCharacters[Math.floor(Math.random()*passwordCharacters.length)];
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); //replaces the placeholder

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
