let arr=[5,4,3,7,3]

function findSecondLargest(arr) {
    
  
    let largest = arr[0];
    let secondLargest = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
      } else if (arr[i] > secondLargest && arr[i] !== largest) {
        secondLargest = arr[i];
      }
    }
  
    if (largest === secondLargest) {
      return "There is no second largest number.";
    }
  
    console.log(secondLargest);
  }
  findSecondLargest(arr)

  