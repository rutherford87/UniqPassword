// Assignment Code - generateBtn is a variable used to tie to the button on the HTML
var generateBtn = document.querySelector("#generate");

// Start function to write password to the #password input
function writePassword() {
    //function generatePassword (){
    //Establish variables. Arrays 1-4 are initial options that will be concatenated together based on prompts
    var passwordText = document.querySelector("#password");
  var array1 = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  //write quickly an uppercase array, from google. 
  var array2 = array1.map(function(x) {return x.toUpperCase(); });
  var array3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var array4 = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]
  var passwordLength = window.prompt('Password length?');
//Kicks back to top of function if length criteria is not met
    if (passwordLength <= 8 || passwordLength >=128 ) {
    alert("Please enter value between 8 and 128");
    writePassword ();
}       else {

  
//give user selection for lower case, upper case alpha, numbers, and special chars in the password
var alphaLowerConf = confirm("Include lower case letters?");
var alphaUpperConf = confirm("Include upper case letters?");
var numConf = confirm("Include numbers?");
var specConf = confirm("Include special characters?");

//declare initial empty final array. Combine arrays based on prompts. Could remove ==true later to save space.
//if all prompts were false, restart at the top of the function.
var finalArray = [];
if (numConf){
    finalArray = finalArray.concat(array3);}
if (alphaLowerConf) {
    finalArray = finalArray.concat(array1);}
if (alphaUpperConf){
    finalArray = finalArray.concat(array2);} 
if (specConf){
    finalArray = finalArray.concat(array4);} 
if (numConf==false && alphaLowerConf==false && alphaUpperConf==false && specConf ==false){
    alert("Please select at least one character type.")
    writePassword();
} else {

    //check that an appropriate array was built
    console.log(`this is my final array${finalArray}`);
var pw = new Array(passwordLength);

for (i=0; i<=passwordLength; i++){
    var rand = Math.floor(Math.random() * finalArray.length);
pw[i] = finalArray[rand];
}
//reducing array down to a string without commas for printing to screen
var pwStringA=pw.join(",");
var pwStringB=pwStringA.replaceAll(",","");
var finalPW = document.querySelector('#password');
finalPW.textContent = pwStringB;
}
}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


