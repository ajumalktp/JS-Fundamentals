let number = 5;

function calculateFactorial(n) {
    if (n === 0 || n === 1) {
      console.log(1);
    }
  
    var factorial = 1;
  
    for (var i = 2; i <= n; i++) {
      factorial *= i;
    }
  
    console.log("Factorial of", n ,"is:"+factorial);
  }
calculateFactorial(number);

