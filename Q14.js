let count = 10;

function fibonacciSeries(n) {
    var fibonacci = [0, 1];
  
    if (n === 0) {
      console.log([]);
    } else if (n === 1) {
      console.log([0]);
    } else if (n === 2) {
      console.log(fibonacci);
    }
  
    for (var i = 2; i < n; i++) {
      var nextFibonacci = fibonacci[i - 1] + fibonacci[i - 2];
      fibonacci.push(nextFibonacci);
    }
  
    console.log(fibonacci); 
  }
fibonacciSeries(count);
  