let inputNumber = 150;

function isArmstrongNumber(number) {
    var numDigits = 0;
    var temp = number;
    var sum = 0;
  
    while (temp > 0) {
      numDigits++;
      temp = Math.floor(temp / 10);
    }
  
    temp = number;
  
    while (temp > 0) {
      var digit = temp % 10;
      var power = 1;
      
      for (var i = 0; i < numDigits; i++) {
        power *= digit;
      }
  
      sum += power;
      temp = Math.floor(temp / 10);
    }
  
    if(number === sum){
        console.log(number,"is a Armstrong number");
    }else{
        console.log(number,"is not a Armstrong number");
    }
  }

isArmstrongNumber(inputNumber);
