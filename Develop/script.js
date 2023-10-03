// Assignment Code
var generateBtn = document.querySelector("#generate"); //button

//generate password function
function generatePassword() {
  //variables for the password criteria
var uppercaseLetters ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseLetters ="abcdefghijklmnopqrstuvwxyz";
var numbers ="0123456789";
var specials ="!@#$%^&*()?{}[]";
var
var
var
var passwordLength;
//Get the desired length of the password
getLength();
function getLength(){
  passwordLength = window.prompt("How long do you want the passowrd? (Between 8 and 128)");
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Please enter a valid length. (8-128)");
    getLength();
  }
}


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); //replaces the placeholder

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener('click', criteria());
