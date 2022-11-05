// Assignment Code
var generateBtn = document.getElementById("generate");

function generatePassword() {
  // ask the user (prompt box) how long the password should be
  var length = prompt("How long do you want the password to be?")
  console.log(length)
  // check to make sure the password is between 8 and 128 characters use an if() {} statement -- if the user input is incorrect, rerun the application
  if (length < 8 || length > 128) {
    alert("Please choose an appropriate password length")
    return
  }
  // ask the user using four confirm boxes what characters they want
var hasSpecial= confirm("Do you want special characters in your password?")
var hasUpper= confirm("Do you want upper case characters in your password?")
var hasLower= confirm("Do you want lower case characters in your password?")
var hasNumbers= confirm("Do you want numbers in your password?")
  // check that at least one type was selected, again using an if statement -- if none were selected, re run the application

 

  // for (let i = 0; i < someNumber; i++) {
  // run the code in this area as many times as the loop runs (iterates)

  // use this for loop to build finalPassword

  // if the user picked 30 as the password length, this should run 30 times    
  // }
  let finalPassword = "This will eventually be a password!"
  return finalPassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
