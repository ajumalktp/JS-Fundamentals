let arr=[1,4,4,5,7,7]

function removeDuplicates(arr) {
    var uniqueArray = [];
  
    for (var i = 0; i < arr.length; i++) {
      var isDuplicate = false;
  
      for (var j = 0; j < uniqueArray.length; j++) {
        if (arr[i] === uniqueArray[j]) {
          isDuplicate = true;
          break;
        }
      }
  
      if (!isDuplicate) {
        uniqueArray.push(arr[i]);
      }
    }
  
    console.log(uniqueArray);
  }
  
  removeDuplicates(arr)