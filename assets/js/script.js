// Assignment code here
const characters = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbols: "!@#$%^&*()_+~"
};

  let pLength = prompt("Please choose the length of your password between 8 and 128");
  let pUpper = prompt('Do you want to use uppercase letters? type y for yes or n for no.');
  let pNumber = prompt('Do you want to use numbers? type y for yes or n for no.');
  let pSpecial = prompt('Do you want to use special characters? type y for yes and n for no.')
  let res = confirm(`You want your password length set at ${pLength}. 
  Will your password contain Uppercase letters? ${pUpper}. 
  Will your password contain a number? ${pNumber}. 
  Will your password contain a special character? ${pSpecial}`);

  if (res === true) {
    alert('generating password now');
    generatePassword();
   } else { 
    alert('please try again')
  };

    function generatePassword(){
    if (pUpper === 'y' && pNumber === 'y' && pSpecial === 'y'){
      Math.floor(Math.random() * characters.uppercase.length);
      Math.floor(Math.random() * characters.lowercase.length);
      Math.floor(Math.random() * characters.numbers.length);
      Math.floor(Math.random() * characters.symbols.length);
    } else if (pUpper === 'y' && pNumber === 'y' && pSpecial ==='n'){
      Math.floor(Math.random() * characters.uppercase.length);
      Math.floor(Math.random() * characters.lowercase.length);
      Math.floor(Math.random() * characters.numbers.length);
    } else if (pUpper === 'y' && pNumber === 'n' && pSpecial === 'n'){
      Math.floor(Math.random() * characters.uppercase.length);
      Math.floor(Math.random() * characters.lowercase.length);
    } else if (pUpper == 'n' && pNumber === 'y' && pSpecial === 'y'){
      Math.floor(Math.random() * characters.lowercase.length);
      Math.floor(Math.random() * characters.numbers.length);
      Math.floor(Math.random() * characters.symbols.length);
    } else if (pUpper === 'n' && pNumber === 'n' && pSpecial === 'y'){
      Math.floor(Math.random() * characters.lowercase.length);
      Math.floor(Math.random() * characters.symbols.length);
    } else if (pUpper === 'n' && pNumber === 'n' && pSpecial === 'n') {
      Math.floor(Math.random() * characters.lowercase.length);
    } else if (pUpper === 'n' && pNumber === 'y' && pSpecial === 'n'){
      Math.floor(Math.random() * characters.lowercase.length);
      Math.floor(Math.random() * characters.numbers.length);
    };

    while (generatePassword().length<pLength);

    return password;
  
  };





     
    
    

console.log(generatePassword())

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());