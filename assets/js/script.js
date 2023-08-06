// Assignment code here
upperArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

lowerArray =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

numArray =[1,2,3,4,5,6,7,8,9,0];

symArray = ['!','@','#','$','%','^','&','*','=','+'];


let length = prompt('Please enter a number between 8 and 128 for the desired number of characters in your password.');

let pUpper = confirm ('Would you like upper case letters in your password? Press okay to include or cancel to exclude.');

let pNum = confirm ('Would you like numbers in your password? Press okay to include or cancel to exclude');

let pSym = confirm ('Would you like symbols in your password? Press okay to include or cancel to exclude');

confirm (` You've chosen the following criteria for your password:
Uppercase letters? ${pUpper}
Numbers? ${pNum}
Symbols? ${pSym}`);

function generatePassword(){

  if (pUpper === true && pNum === true && pSym === true) {
    const strong = upperArray.concat(lowerArray,numArray,symArray);
    strong.sort(()=> Math.random() - 0.5);
    password = strong.slice(0,length);
  } else if (pUpper === false && pNum === true && pSym ===true){
    const med = lowerArray.concat(numArray,symArray);
    med.sort(() => Math.random() - 0.5);
    password = med.slice (0,length);
  } else if (pNum === false && pUpper === false && pSym === true) {
    const medium = lowerArray.concat(symArray);
    medium.sort(()=>Math.random() - 0.5);
    password = medium.slice (0,length);
  } else if (pUpper===true && pNum===false && pSym === false) {
    const middle = lowerArray.concat (upperArray);
    middle.sort(()=>Math.random() - 0.5);
    password = middle.slice (0,length);
  } else if (pUpper === false && pNum === false && pSym === false){
    const weak = lowerArray.sort(()=>Math.random() - 0.5);
    password = weak.slice (0,length);
  } else if (pUpper === true && pNum===false && pSym===true ){
    const sitA = lowerArray.concat(upperArray,symArray);
    sitA.sort(()=>Math.random() - 0.5);
    password = sitA.slice (0,length);
  } else if (pUpper===true && pNum===true && pSym===false){
    const sitB = lowerArray.concat(upperArray,symArray);
    sitB.sort(()=> Math.random() - 0.5);
    password = sitB.slice (0,length);
  }

  
  return password;
}

while (password.length < length) {
  generatePassword()
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
generateBtn.addEventListener("click", writePassword());