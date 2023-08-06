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
    let strong = upperArray.concat(lowerArray,numArray,symArray);
    strong.sort(()=> Math.random() - 0.5);
    password = passLength(strong);
    return password;

    
  } else if (pUpper === false && pNum === true && pSym ===true){
    let med = lowerArray.concat(numArray,symArray);
    med.sort(() => Math.random() - 0.5);
    password = passLength(med);
    return password;

  } else if (pNum === false && pUpper === false && pSym === true) {
    let medium = lowerArray.concat(symArray);
    medium.sort(()=>Math.random() - 0.5);
    password = passLength(medium);
    return password;

  } else if (pUpper===true && pNum===false && pSym === false) {
    let middle = lowerArray.concat (upperArray);
    middle.sort(()=>Math.random() - 0.5);
    password = passLength(middle);
    return password;

  } else if (pUpper === false && pNum === false && pSym === false){
    let weak = lowerArray.sort(()=>Math.random() - 0.5);
    password = passLength(weak);
    return password;

  } else if (pUpper === true && pNum===false && pSym===true ){
    let sitA = lowerArray.concat(upperArray,symArray);
    sitA.sort(()=>Math.random() - 0.5);
    password = passLength(sitA);
    return password;

  } else if (pUpper===true && pNum===true && pSym===false){
    let sitB = lowerArray.concat(upperArray,numArray);
    sitB.sort(()=> Math.random() - 0.5);
    password = passLength(sitB);
    return password;
  }
};

function passLength(text){
  let res = ''
  for (let i=0; i<length; i++){ 
    res += text[Math.floor(Math.random() * text.length)] 
  }
  return res;
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