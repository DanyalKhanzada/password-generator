// * Global Variables
var lowerCaseInput = false;
var upperCaseInput = false;
var numberInput = false;
var specialCharInput = false;
var passLength = '0';
var passLengthInt = 0;

let lowerCaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let upperCaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let numberArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let specialCharArray = [' ', '!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~']

// Click Button
  function charSelect(){  

    //confirm box for lowercase letters - OK to add, cancel to leave out
    lowerCaseInput = confirm("Would you like lower case letters?");
  
    //confirm box for uppercase letters - OK to add, cancel to leave out
      upperCaseInput = confirm("Would you like upper case letters?");
  
    //confirm box for numbers - OK to add, cancel to leave out 
      numberInput = confirm("Would you like numbers?");
  
    //confirm box for special char - OK to add, cancel to leave out
      specialCharInput = confirm("Would you like special characters?");
  
    //Validate and choose at least one of each selected criteria
      if( lowerCaseInput == true || upperCaseInput == true || numberInput == true || specialCharInput == true){
        alert("Thanks for your input. Engaging code tumblers.")
      }
      else{
        alert("Please choose at least one character type.");
        charSelect();
      }; 
  };

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
