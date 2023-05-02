var num = 12345;

function sumDigits(number) {
    var sum = 0;
  
    var numberString = number.toString();

    for (var i = 0; i < numberString.length; i++) {
      sum += parseInt(numberString[i]);
    }
  
    console.log(sum);
  }
sumDigits(num);
  