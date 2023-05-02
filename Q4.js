let n=20

function sumEvenNumbers(n) {
    let total = 0;
    for (let i = 2; i <= n; i += 2) {
      total += i;
    }
    console.log(total);
  }

  sumEvenNumbers(n)
  