function longestPallindromicSubseq(dp, string1, i, j) {
  if (!dp[i+'-'+j]) {
   if (i > j) return 0;
  if (i == j) return 1;
  let p1 = 0
  if(string1[i] == string1[j])
    p1 = 2 + longestPallindromicSubseq(dp, string1, i+1, j-1)
  let p2 = longestPallindromicSubseq(dp, string1, i+1, j);
  let p3 = longestPallindromicSubseq(dp, string1, i, j-1);
  dp[i+'-'+j] = Math.max(p1, p2, p3); 
  }
  
  return dp[i+'-'+j]
  
    
}

console.log(longestPallindromicSubseq({}, 'MADAMS', 0, 5))