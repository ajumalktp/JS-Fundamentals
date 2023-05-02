var limit = 100;
var isEven = true;

function sumEvenOrOddNumbers(number, isEven) {
    var sum = 0;
  
    for (var i = 1; i < number; i++) {
      if ((isEven && i % 2 === 0) || (!isEven && i % 2 !== 0)) {
        sum += i;
      }
    }

    console.log(sum);
  }

sumEvenOrOddNumbers(limit, isEven);
  