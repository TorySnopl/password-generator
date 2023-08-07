// Assignment code here
//Arrays
upperArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

lowerArray =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

numArray =[1,2,3,4,5,6,7,8,9,0];

symArray = ['!','@','#','$','%','^','&','*','=','+'];

// global variables
let length = 0;
let pNum = true;
let pUpper = true;
let pSym = true;
let pLow = true;

//function to get user preferences and update global variables
function getUserPreferences(){  
function chooselength() {
    let answer = prompt('Please enter a number between 8 and 128 for the desired number of characters in your password.');
   if (answer === null){
    alert ('You have selected cancel and will not be provided a password');
    return;
  } else if ( answer<8 || answer>128){
    alert('please enter a number between 8 and 128');
    chooselength();
  } else  {
    length = answer;
    return length;
  }
}; 
chooselength();

function chooseCharacters(){
pLow = confirm ('Would you like to include lower case letters? Press okay to include or cancel to exclude.');

pUpper = confirm ('Would you like upper case letters in your password? Press okay to include or cancel to exclude.');

pNum = confirm ('Would you like numbers in your password? Press okay to include or cancel to exclude');

pSym = confirm ('Would you like symbols in your password? Press okay to include or cancel to exclude');

result = confirm (` You've chosen the following criteria for your password:
Lowercase letters? ${pLow}
Uppercase letters? ${pUpper}
Numbers? ${pNum}
Symbols? ${pSym}`);

if (result === false){
  alert('Lets try again');
  chooseCharacters();
} else {
  return pNum,pSym,pUpper,pLow;
}
};
chooseCharacters();

};

// function to generate password based on user preferences
function generatePassword(){

  if (pUpper === true && pNum === true && pSym === true && pLow === true) {
    let strong = upperArray.concat(lowerArray,numArray,symArray);
    strong.sort(()=> Math.random() - 0.5);
    password = passLength(strong);
    return password;

    
  } else if (pUpper === false && pNum === true && pSym ===true && pLow === true){
    let med = lowerArray.concat(numArray,symArray);
    med.sort(() => Math.random() - 0.5);
    password = passLength(med);
    return password;

  } else if (pNum === false && pUpper === false && pSym === true && pLow === true) {
    let medium = lowerArray.concat(symArray);
    medium.sort(()=>Math.random() - 0.5);
    password = passLength(medium);
    return password;

  } else if (pUpper===true && pNum===false && pSym === false && pLow === true) {
    let middle = lowerArray.concat (upperArray);
    middle.sort(()=>Math.random() - 0.5);
    password = passLength(middle);
    return password;

  } else if (pUpper === false && pNum === false && pSym === false && pLow === true){
    let weak = lowerArray.sort(()=>Math.random() - 0.5);
    password = passLength(weak);
    return password;

  } else if (pUpper === true && pNum===false && pSym===true && pLow === true){
    let sitA = lowerArray.concat(upperArray,symArray);
    sitA.sort(()=>Math.random() - 0.5);
    password = passLength(sitA);
    return password;

  } else if (pUpper===true && pNum===true && pSym===false && pLow === false){
    let sitB = upperArray.concat(numArray);
    sitB.sort(()=> Math.random() - 0.5);
    password = passLength(sitB);
    return password;

  } else if (pLow===true && pUpper===false && pSym===false && pNum===true){
    let sitC = lowerArray.concat(numArray);
    sitC.sort(()=> Math.random() - 0.5);
    password = passLength(sitC);
    return password;

  } else if (pLow===false && pUpper===true && pSym===true && pNum===true){
    let sitD = upperArray.concat(symArray,numArray);
    sitD.sort(()=> Math.random() - 0.5);
    password = passLength(sitD);
    return password;

  } else if (pLow===false && pUpper===true && pSym===true && pNum===false){
    let sitE = upperArray.concat(symArray);
    sitE.sort(()=> Math.random() - 0.5);
    password = passLength(sitE);
    return password;

  } else if (pLow===false && pUpper===true && pSym===false && pNum===false){
    let sitF = upperArray;
    sitF.sort(()=> Math.random() - 0.5);
    password = passLength(sitF);
    return password;

  } else if (pLow===false && pUpper===false && pSym===false && pNum===false){
    alert ('You must choose at least one type of character to include');
    getUserPreferences();
    return;

  } else if (pLow===false && pUpper===false && pSym===true && pNum===true){
    let sitG = symArray.concat(numArray);
    sitG.sort(()=> Math.random() - 0.5);
    password = passLength(sitG);
    return password;

  } else if (pLow===false && pUpper===false && pSym===false && pNum===true){
    let sitH = numArray;
    sitH.sort(()=> Math.random() - 0.5);
    password = passLength(sitH);
    return password;

  } else if (pLow===false && pUpper===true && pSym===false && pNum===true){
    let sitI = upperArray.concat(numArray);
    sitI.sort(()=> Math.random() - 0.5);
    password = passLength(sitI);
    return password;

  } else if (pLow===true && pUpper===true && pNum===true && pSym===false){
    let sitJ = upperArray.concat(lowerArray,numArray);
    sitJ.sort(()=> Math.random() - 0.5);
    password = passLength(sitJ);
    return password;

  } else if (pLow===false && pUpper===false && pNum===false && pSym===true){
    let sitK = symArray;
    sitK.sort(()=> Math.random() - 0.5);
    password = passLength(sitK);
    return password;
  }
};

// function to match desired password length
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
  
getUserPreferences();

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);