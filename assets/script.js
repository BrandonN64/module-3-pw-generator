// Setting up the arrays with all the needed characters to use later on
var generateBtn = document.querySelector("#generate");
var capsCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var nonCapsCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var specialCharacters = ["!","@","#","$","%","^","&","*","(",")"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
// This is where the user picks what choices they want their password to have, and checks to make sure the number inputted is an number and has an acceptable length
function getChoices() {
  var passwordLength = parseInt(prompt("Enter a number between 8 and 128"));
  if (Number.isNaN(passwordLength) === true) {
    alert ("Input has to be a number. Please try again")
    return;
  }
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert ("Number has to be between 8 and 128. Please try again")
    return;
  }
  // Testing to make sure the passwordLength is passing through properly

  var hasNonCapsCharacters = confirm("Does the password have lower case characters?")
  var hasCapsCharacters = confirm("Does the password have upper case characters?")
  var hasNumbers = confirm("Does the password have numbers?")
  var hasSpecialCharacters = confirm("Does the password have special characters?")
  // Testing to make sure that the confirms are working as intended
  // Checks to see if all of the options were false, and if they were, asks the user to repeat but select an option
  if (!hasNonCapsCharacters && !hasCapsCharacters && !hasNumbers && !hasSpecialCharacters){
    alert("Please choose at least one choice");
    return;
  }
  // Sets up the password object with password choices as variables
  var password = {
    passwordLength: passwordLength,
    hasNonCapsCharacters: hasNonCapsCharacters,
    hasCapsCharacters: hasCapsCharacters,
    hasNumbers: hasNumbers,
    hasSpecialCharacters: hasSpecialCharacters
  };
  return password;
}

function makePassword(array){
  var makePassword = Math.floor(Math.random() * array.length)
  var madePassword = array[makePassword];
  return madePassword;
}
function createPassword () {
  var choices = getChoices();
  var generatedPassword = [];
  var pwCharacters = [];
  var pwCharactersArray = [];

  if (choices.hasNonCapsCharacters) {
    pwCharacters = pwCharacters.concat(nonCapsCharacters);
    pwCharactersArray.push(makePassword(nonCapsCharacters))
  }
  if (choices.hasCapsCharacters) {
    pwCharacters = pwCharacters.concat(capsCharacters);
    pwCharactersArray.push(makePassword(capsCharacters))
  }
  if (choices.hasNumbers) {
    pwCharacters = pwCharacters.concat(numbers);
    pwCharactersArray.push(makePassword(numbers))
  }
  if (choices.hasSpecialCharacters) {
    pwCharacters = pwCharacters.concat(specialCharacters);
    pwCharactersArray.push(makePassword(specialCharacters))
  }
  for (var i = 0; i < choices.passwordLength; i++) {
    var fullPW = makePassword(pwCharacters);
    generatedPassword.push(fullPW)
  }
  return generatedPassword.join("")
}
// Write password to the #password input
function writePassword() {
  var password = createPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
