function zeroOneKnapSack(dp, profit, weight, capacity, i) {
  if (!dp[i+'-'+capacity]) {
      if (i >= weight.length || capacity <= 0 || i < 0) return 0;
    let c1 = 0;
    if (weight[i] <= capacity) {
        c1 = profit[i] + zeroOneKnapSack(dp, profit, weight, capacity- weight[i], i+1);
    }
    
    let c2 = zeroOneKnapSack(dp, profit, weight, capacity, i+1);
    
    dp[i+'-'+capacity] = Math.max(c1, c2);
  }
    return dp[i+'-'+capacity];
  
    
}

console.log(zeroOneKnapSack({}, [31, 26, 72, 17], [3,1,5,2], 7, 0))