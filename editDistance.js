function minimumOperations(string1, string2) {
  let operationsArray = []; //2-Dimensional Array for recording the Operations
  
  for(let i = 0 ; i <= string1.length; i++) {
    operationsArray[i] = []
    for (let j = 0 ; j <= string2.length; j++) {
      if (i === 0) {
        operationsArray[i][j] = j;
      } else if (j === 0) {
        operationsArray[i][j] = i;
      } else if (string1[i-1] == string2[j-1]){
          operationsArray[i][j] = operationsArray[i-1][j-1];
      } else {
        operationsArray[i][j] = 1 + Math.min(operationsArray[i-1][j-1], operationsArray[i][j-1], operationsArray[i-1][j])
      }
      
    }
  }
  
  return operationsArray[string1.length][string2.length];
}

console.log(minimumOperations('abc', 'acc'))
