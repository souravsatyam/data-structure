function oneStringToAnotherTopDown(dp, str1, str2, i, j) {
    if(!dp[i+'-'+j]) {
        if (i == str1.length) return str2.length - j;
    if (j == str2.length) return str1.length - i;
    
    if(str1[i] == str2[j]) {
      return oneStringToAnotherTopDown(dp, str1, str2, i+1, j+1);
    }
    let x = 1 + oneStringToAnotherTopDown(dp, str1, str2, i, j+1);
    let y = 1 + oneStringToAnotherTopDown(dp, str1, str2, i+1, j+1);
    let z = 1 + oneStringToAnotherTopDown(dp, str1, str2, i+1, j);
       dp[i+'-'+j] = Math.min(x,y,z);
    } 
  return dp[i+'-'+j];
    
}

console.log(oneStringToAnotherTopDown({}, 'abc', 'accd', 0, 0));