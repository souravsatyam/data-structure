function longestCommonSubSeq(dp, string1, string2, i, j) {
  if(!dp[i+'-'+j]) {
    if (i == string1.length) return 0
    if (j == string2.length) return 0
    let t1 = 0
    if (string1[i] == string2[j])
      t1 = 1 + longestCommonSubSeq(dp, string1, string2, i+1, j+1)
    let t2 = longestCommonSubSeq(dp, string1, string2, i, j+1)
    let t3 = longestCommonSubSeq(dp, string1, string2, i+1, j)
    dp[i+'-'+j] = Math.max(t1, t2, t3);
  }
    
  return dp[i+'-'+j];
    
}

console.log(longestCommonSubSeq({}, 'elephant', 'ereper', 0, 0));