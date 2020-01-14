let string1 = 'AGGTAB';
let string2 = 'GXTXAY';
let record_array= []; //2-Dimensional Array

function longestCommonSeq(string1, string2) {
  for (let i = 0; i <= string1.length; i++) {
    record_array[i] = [];
    for (let j = 0 ; j <= string2.length; j++) {
      if (i === 0 || j === 0) {
          record_array[i][j] = 0
      }
      else if (string1[i-1] == string2[j-1]) {
        record_array[i][j] = 1 + record_array[i-1][j-1];
      } else  if (string1[i-1] !== string2[j-1]) {
        record_array[i][j] = Math.max(record_array[i-1][j], record_array[i][j-1])
      }
    }
  }
  return record_array[string1.length][string2.length];
}

console.log(longestCommonSeq(string1, string2))


