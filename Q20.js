var string = "Muhammed Ajumal";

function countVowels(str) {
    var vowels = "aeiouAEIOU";
    var count = 0;
  
    for (var i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        count++;
      }
    }
  
    console.log(count);
  }
countVowels(string);
  