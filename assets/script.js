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

// *Click Button*
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

  //length of password (8-128 char)
  //text input box that asks for length (8-128), and asks again if blank or not in that range
  function passLengthChooser(){
    passLength = prompt("How long should your password be?  Please choose from 8 to 128 characters.")
    passLengthInt = parseInt(passLength);

    if(passLengthInt >= 8 && passLengthInt <= 128){
      alert("Configuring time dilator for a length of " + passLengthInt + " characters.")
    }
    else{
      alert("Please choose a length within the available parameters.")
      passLengthChooser();
    };
  };

//Pull random characters from each array
//loop until password length is met.

function getArray(){
  if(lowerCaseInput == false && upperCaseInput == false && numberInput == false && specialCharInput == true){
    bigArray = specialCharArray;
  }

  else if(lowerCaseInput == false && upperCaseInput == false && numberInput == true && specialCharInput == false){
    bigArray = numberArray;
  }

  else if(lowerCaseInput == false && upperCaseInput == false && numberInput == true && specialCharInput == true){
    //NUM AND SPECIAL HERE
    bigArray = numArray.concat(specialCharArray);
  }

  else if(lowerCaseInput == false && upperCaseInput == true && numberInput == false && specialCharInput == false){
    //UPPER ONLY HERE
    bigArray = upperCaseArray;
  }

  else if(lowerCaseInput == false && upperCaseInput == true && numberInput == false && specialCharInput == true){
    //UPPER AND SPECIAL HERE
    bigArray = upperCaseArray.concat(specialCharArray);
  }

  else if(lowerCaseInput == false && upperCaseInput == true && numberInput == true && specialCharInput == false){
    //UPPER AND NUMBER HERE
    bigArray = upperCaseArray.concat(numberArray);
  }

  else if(lowerCaseInput == false && upperCaseInput == true && numberInput == true && specialCharInput == true){
    //UPPER NUMBER AND SPECIAL HERE
    bigArray = upperCaseArray.concat(numberArray, specialCharArray);
  }

  else if(lowerCaseInput == true && upperCaseInput == false && numberInput == false && specialCharInput == false){
    //LOWER ONLY HERE
    bigArray = lowerCaseArray;
  }

  else if(lowerCaseInput == true && upperCaseInput == false && numberInput == false && specialCharInput == true){
    //LOWER AND SPECIAL HERE
    bigArray = lowerCaseArray.concat(specialCharArray);
  }

  else if(lowerCaseInput == true && upperCaseInput == false && numberInput == true && specialCharInput == false){
    //LOWER AND NUMBER HERE
    bigArray = lowerCaseArray.concat(numberArray);
  }

  else if(lowerCaseInput == true && upperCaseInput == false && numberInput == true && specialCharInput == true){
    //LOWER NUMBER AND SPECIAL HERE
    bigArray = lowerCaseArray.concat(numberArray, specialCharArray);
  }

  else if(lowerCaseInput == true && upperCaseInput == true && numberInput == false && specialCharInput == false){
    //LOWER AND UPPER HERE
    bigArray = lowerCaseArray.concat(upperCaseArray);
  }

  else if(lowerCaseInput == true && upperCaseInput == true && numberInput == false && specialCharInput == true){
    //LOWER UPPER AND SPECIAL HERE
    bigArray = lowerCaseArray.concat(upperCaseArray, specialCharArray);
  }

  else if(lowerCaseInput == true && upperCaseInput == true && numberInput == true && specialCharInput == false){
    //LOWER UPPER NUMBERS HERE
    bigArray = lowerCaseArray.concat(upperCaseArray, numberArray);
  }

  else{
    //ALL ARRAYS HERE
    bigArray = lowerCaseArray.concat(upperCaseArray, numberArray, specialCharArray);
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
