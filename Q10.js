let myArray = [3, 7, 2, 9, 1, 5];

function findMinMax(arr) {
    var min = arr[0];
    var max = arr[0];
  
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
  
      if (arr[i] > max) {
        max = arr[i];
      }
    }
  
    console.log("Minimum:"+min);
    console.log("Maximum:"+max);
  }
  findMinMax(myArray);
  