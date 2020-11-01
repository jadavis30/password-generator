// Assignment code here
var password = {
  length: charLength(),
  lowerCase: ,
  upperCase: ,
  specialChar: ,
}
var charLength = function() {
  var getcharLength = "";
  var charLengthPrompt = window.prompt
  ("Choose a numeric value between 8 and 128 characters for your password.");
  charLengthPrompt = parseInt(charLengthPrompt);
};
  //Change user input to numeric value with parseInt
  //parseInt(userInput to numeric value)
  /*if(number outside of 8-128 range) 
  "Please choose a number between 8 and 128." 
  run charLength function again.*/
  if (charLength === (i < 8 || charLength === i > 128)
    window.alert("Please choose a valid answer between 8 and 128.");
    return charLength;
  }
  else {
  return charLength; }
};
lowerCase = function() {
  window.confirm("Should your password contain lowercase characters? Confirm to accept, Cancel to deny.")
  console.log ("lowerCase")
  return lowerCase;
}
upperCase = function() {
  window.confirm("Should your password contain lowercase characters? Confirm to accept, Cancel to deny.")
  console.log ("upperCase")
  return lowerCase;
}
specialChar= function(){
  window.confirm("Should your password contain special characters? Confirm to accept, Cancel to deny.")
  console.log ("specialChar")
  return specialChar;
}
function generateBtn() {
  function generatePassword {
    charLength();
    lowerCase();
    upperCase();
    specialChar();
  }
}  



var password = [
  charLength:""
  lowerCase:""
  upperCase:""
  specialChar:""
];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
