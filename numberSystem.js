
//Top Down Approach

function dpArray(array, n) {
  if (n == 0 || n == 1 || n == 2) return 1;
  if (n == 3) return 2;
  
  
  if (!array[n]) {
    let sub1 = dpArray(array, n-1);
    let sub2 = dpArray(array, n-3);
    let sub3 = dpArray(array, n-4);
    let x = sub1+sub2+sub3;
    array[n] = x;
  }
  
  return array[n];
  
}

console.log(dpArray({}, 7));

//Botton Up Approach

function bottomUpdpArray(array, n) {
  array = [1,1,2];
  
  for (let i = 4; i <= n; i++) {
    array[i] = array[i-1] + array[i-2] + array[3];
  }
  
  return array[7];
  
}
console.log(bottomUpdpArray([], 7))

