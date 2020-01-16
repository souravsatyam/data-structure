/*
Given an array print the maximum sum of subset divisible by 3

*/

function maxSum(array) {
  if (array.length == 0) {
    return 0;
  }
  let sum = 0
  let remider_val = [];

  //get total sum of all number and push reminder to an empty array
  for (let i = 0 ; i < array.length; i++) {
    sum += array[i];
    remider_val.push(array[i]%3);
  }

  //if sum is divisble by 3 return sum
  if (sum % 3 == 0) {
    return sum;
  }

  //Otherwise get the minimum from array and substract the from the total Sum
  while (sum%3 != 0) {
      sum -= Math.min.apply(null, remider_val);
      remider_val.splice(remider_val.indexOf(Math.min.apply(null, remider_val)), 1);
  }
  
  return sum;
}
console.log(maxSum([1, 9, 8, 3, 2, 4, 6, 8, 6, 10, 14, 1, 2]));
