 function waysToCoverDistance(n) {
      let array = []

      //Fill All element of length n with 1
      for (let i = 0; i < n; i++) {
        array[i] = 1
      }
      count = 1

      /*
      If array length is greator than 1 
      then add one ro second last and substract 1 to second last
      */

      while (array.length > 1) {

        array[array.length - 2] += 1
        if (array[array.length - 1] > 0) {
          array[array.length - 1] -= 1
        }
        count += 1
        if (array[array.length - 1] == 0) {
          array.pop()
        }
      }
      return count;
    }

    console.log(waysToCoverDistance(34));
