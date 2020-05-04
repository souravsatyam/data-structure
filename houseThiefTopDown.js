function houseThief(dp, net_worth, current_index) {
  if(current_index >= net_worth.length) return 0;
  
  if (!dp[current_index]) {
    let x = net_worth[current_index] + houseThief(dp, net_worth, current_index+2);
    let y = houseThief(dp, net_worth, current_index+1);
    dp[current_index] = Math.max(x,y);
  }
  return dp[current_index];
}

console.log(houseThief({}, [10, 20, 40, 16, 8, 28], 0))