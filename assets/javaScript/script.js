// Assignment code here

//Generate Function (Parent)
  generatePassword = function() {
  //Defining character length from user input
     var charLength = window.prompt
    ("Choose a numeric value between 8 and 128 characters for your password.");
  //Validate number is in correct range
    if (charLength < 8 || charLength > 128){
      window.alert("Sorry, you must choose a number between 8 and 128.");
      return false;
    } 
   
  //Change string to number
    charLength = parseInt(charLength);
    
  
  var possibleCharacters = "";

  //Choosing whether or not lower case characters will be a variable in the password
    var lowerCaseChars =  window.confirm("Does it need lower case characters? OK for 'Yes', Cancel for 'No'.");
    if (lowerCaseChars) {
      //password should now contain randomized lowercase letters
    possibleCharacters += "abcdefghijklmnopqrstuvwxyz";
    }
  
  
    //Choosing whether or not upper case characters will be a variable in the password
    var upperCaseChars =  window.confirm("Does it need upper case characters? OK for 'Yes', Cancel for 'No'.");
    if (upperCaseChars) {
    //password should now contain randomized lowercase letters
    possibleCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    //Choosing whether or not special characters will be a variable in the password
    var specialChar = window.confirm("Does it need  special characters? Ok for 'Yes', Cancel for 'No'.");
    if (specialChar) {
    //password should now contain randomized special characters
    possibleCharacters += "!@#$%^&*?";
    }
    
    if (possibleCharacters.length <= 0)
    {
      return false;
    }
    var generatePassword = "";

    for (var i =0; i < charLength; i++)
    {
     
      var rnd = Math.floor(Math.random() * possibleCharacters.length);
      var randomCharacter = possibleCharacters.substr(rnd, 1);

      generatePassword += randomCharacter;
    }

    return generatePassword;
    } 
    
  
  


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  if (password) {
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }
  else {
    window.alert("Invalid input. Try again!")
  }
 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
