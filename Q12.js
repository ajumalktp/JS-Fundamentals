var inputString = "malayal";

function isPalindrome(str) {
  var reversedStr = str.split("").reverse().join("");
   if(str === reversedStr){
    console.log("its a palimdrome");
   }else{
    console.log("its not a palindrome")
   }
}
isPalindrome(inputString);

