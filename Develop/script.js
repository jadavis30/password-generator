// Assignment code here

//Generate Function (Parent)
document.getElementById("generate").onclick = function() {
    
  //Defining character length from user input
    var charLengthPrompt = window.prompt
    ("Choose a numeric value between 8 and 128 characters for your password.");
  //Validate number is in correct range
    if (charLengthPrompt < 8 || charLengthPrompt > 128){
      window.alert("Sorry, you must choose a number between 8 and 128.");
    } 
    else {
      window.alert("Your password will be " + charLengthPrompt + "character(s) long.")
    }
  //Change string to number
    charLengthPrompt = parseInt(charLengthPrompt);
    console.log (charLengthPrompt);
  };

  //Choosing whether or not lower case characters will be a variable in the password
  lowerCase = function() {
    window.confirm("Should your password contain lowercase characters? Confirm to accept, Cancel to deny.")
    console.log ("lowerCase")
  
  }
  //Choosing whether or not upper case characters will be a variable in the password
  upperCase = function() {
    window.confirm("Should your password contain lowercase characters? Confirm to accept, Cancel to deny.")
    console.log ("upperCase")
  
  }
  //Choosing whether or not special characters will be a variable in the password
  specialChar= function(){
    window.confirm("Should your password contain special characters? Confirm to accept, Cancel to deny.")
    console.log ("specialChar")
  
  } 
};
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//Array for password
var password = {
  length: charLength(),
  lowerCase: lowerCase(),
  upperCase: upperCase(),
  specialChar: specialChar(),
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
