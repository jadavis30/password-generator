// Assignment code here

//Generate Function (Parent)
  generatePassword = function() {
  //Defining character length from user input
     var charLength = window.prompt
    ("Choose a numeric value between 8 and 128 characters for your password.");
  //Validate number is in correct range
    if (charLength < 8 || charLength > 128){
      window.alert("Sorry, you must choose a number between 8 and 128.");
      generatePassword();
    } 
   
  //Change string to number
    charLength = parseInt(charLength);
    console.log (charLength);
  

  //Choosing whether or not lower case characters will be a variable in the password
    var lowerCaseChars =  window.confirm("Does it need lower case characters? OK for 'Yes', Cancel for 'No'.");
    if (lowerCaseChars) {
      //password should now contain randomized lowercase letters
      var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    }
  
  
    //Choosing whether or not upper case characters will be a variable in the password
    var upperCaseChars =  window.confirm("Does it need upper case characters? OK for 'Yes', Cancel for 'No'.");
    if (upperCaseChars) {
    //password should now contain randomized lowercase letters
    var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    //Choosing whether or not special characters will be a variable in the password
    var specialChar = window.confirm("Does it need  special characters? Ok for 'Yes', Cancel for 'No'.");
    if (specialChar) {
    //password should now contain randomized special characters
    var specialChar = "!@#$%^&*?"
    }
    
    function randomPassword() {
      for (var i=0; i<string-length; i++) {
        var rnum = Math.floor(Math.random() * chars.length);
        randomPassword += chars.substring (rnum, rnum + 1);
      }
    }  
    
  }
  


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//Array for password
/*var password = {
  length: charLength(),
  lowerCase: lowerCase(),
  upperCase: upperCase(),
  specialChar: specialChar(),
}*/

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
