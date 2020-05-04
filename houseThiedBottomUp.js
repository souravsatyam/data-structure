function houseThief(dp, net_worth, current_index) {
  current_index = net_worth.length;
  dp[current_index] = 0;
  for (i=current_index-1; i>=0; i--) {
    if (!dp[i+2]) dp[i+2] = 0;
    dp[i] = Math.max(net_worth[i]+dp[i+2], dp[i+1]);
  }
  return dp[0];
  
}

console.log(houseThief({}, [10, 20, 40, 16, 8, 28], 0))



