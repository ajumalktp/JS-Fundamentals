var arr1 = [1, 2, 3, 4, 5];
var arr2 = [3, 4, 5, 6, 7];

function findUnion(array1, array2) {
    var union = [];
  
    for (var i = 0; i < array1.length; i++) {
      if (union.indexOf(array1[i]) === -1) {
        union.push(array1[i]);
      }
    }
  
    for (var j = 0; j < array2.length; j++) {
      if (union.indexOf(array2[j]) === -1) {
        union.push(array2[j]);
      }
    }
  
    console.log(union);
  }
 
findUnion(arr1, arr2);
  