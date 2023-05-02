let limit = 20;

function isPrime(num) {
    if (num <= 1) {
      return false;
    }
  
    for (var i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  function sumOfPrimes(limit) {
    var sum = 0;
  
    for (var i = 2; i <= limit; i++) {
      if (isPrime(i)) {
        sum += i;
      }
    }
  
    console.log("Sum of prime numbers up to", limit, "is:", sum);
  }
sumOfPrimes(limit);
  