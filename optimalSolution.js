/*
Problem statement: Consider a row of n coins of values v1 . . . vn, where n is even. We play a game against an opponent 
by alternating turns. In each turn, a player selects either the first or last coin from the row, removes it from the row 
permanently, and receives the value of the coin. Determine the maximum possible amount of money we can definitely win if we move first.


*/



function optimalStrategy(array) {
        let i = 0;
        let s = 0

        while(array.length > 0) {
    
          let front = array[i+1] - array[i];
          let back  = array[array.length - 1] - array[array.length - 2];
          let min_array = 0;
          if ((Math.abs(front) > Math.abs(back)) && front > 0) {
              min_array = Math.min(array[0], array[array.length - 1]);
          } else {
              min_array = Math.max(array[0], array[array.length - 1]);
          }
          array.splice(array.indexOf(min_array), 1);
         
          if (i%2 == 0) {
            s += min_array
          }
          
          i += 1
        }
        return s;
    }
    console.log(optimalStrategy([5, 3, 7, 10]))
    console.log(optimalStrategy([8, 15, 3, 7]))
