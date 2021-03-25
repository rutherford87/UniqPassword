// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    function generatePassword ()
    var passwordText = document.querySelector("#password");

  // stu code going forward
  var input1 = window.prompt('Password length??');
  var array1 = ['a', 'b', 'c', 'd', 'e'];
  var array2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  
//combine arrays based on prompts
var alphaConf = confirm("Alpha?");
var numConf = confirm("Numeric?");
if (alphaConf == true && numConf == true) {
    var array3 = array1.concat(array2);
 } else if (alphaConf == false && numConf == true){
        var array3 = array2;
    }   else if (alphaConf == true && numConf == false){
            var array3 = array1;
        }    else {
                window.prompt('Refresh');            
        }
    
    console.log(`this is my final array${array3}`);
var pw = new Array(input1);

console.log(array1.length);


for (i=0; i<=input1; i++){
    var rand = Math.floor(Math.random() * array3.length);
    console.log(rand);
pw[i] = array3[rand];
}
}


  //return to instructor code
 // passwordText.value = pw;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// for restarting loop if not given proper values
// at the very end of prompting, if all 4 booleans were false, restart
// function generatePassword (){
//     var passwordLength =prompt("Confirm Password Length Between 8-128 Characters.");
//       if (passwordLength <= 8 || passwordLength >=128 ) {
//         alert("Please enter value between 8 and 128");
//         generatePassword ();
//       } else {
  