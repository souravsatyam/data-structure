//Bubble Sort

function bubbleSort(array) {
  let i = array.length;
  while (i--) {
      for (let j = 0 ; j < i; j++) {
          if (array[j] > array[j+1]) {
            let temp = array[j];
            array[j] = array[j+1];
            array[j+1] = temp;
          }
      }
  }
  return array;
}
console.log(bubbleSort([3,2,6,7,4,1]));

//Selection Sort

function selectionSort(array) {
    let min = array[0];
    let index = 0;
    for(let i = 0 ; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {
            if (array[j] < min) {
              min = array[j];
              index = j
            }
        }
        var temp = array[index];
        array[index] = array[i];
        array[i] = temp;
      }
    return array;
  }
  
  console.log(selectionSort([2, 3, 4, 6, 7, 1]));

  //Insertion Sort

  function insertionSort(array) {
    let min = array[0];
    let index = 0;
    for(let i = 1 ; i < array.length; i++) {
        for (let j = i; j > 0; j--) {
            if (array[j] < array[j-1]) {
              var temp = array[j-1];
              array[j-1] = array[j];
              array[j] = temp;
            }
        }
       
      }
    return array;
  }
  
  console.log(insertionSort([2, 3, 4, 6, 7, 1]));

  function insertionSort(array) {
    let min = array[0];
    let index = 0;
    for(let i = 1 ; i < array.length; i++) {
      let cur_val = array[i];
        for (var j = i-1; (j >= 0 && array[j] > cur_val); j--) {
            array[j+1] = array[j];
           
        }
        array[j+1] = cur_val
       
      }
    return array;
  }
  
  console.log(insertionSort([2, 3, 4, 6, 7, 1]));

  // Merge Sort

  function merging(array1 , array2) {
    let i = j = k = 0;
     let newArray = [];
     while (i < array1.length && j < array2.length) {
       if (array1[i] < array2[j]) {
         newArray[k] = array1[i];
         i += 1
       } else if (array1[i] > array2[j]) {
         newArray[k] = array2[j];
         j += 1;
       }
       k += 1
     }
     return newArray;
   }
   
   
   function mergeSort(array) {
     if (array.length <= 1) return array
     
     let mid = Math.floor((array.length)/2);
     let l = array.slice(0, mid);
     let r = array.slice(mid, array.length);
     mergeSort(l);
     mergeSort(r);
     merging(l, r);
     
     
   }
   
   console.log(merging([1,2,4,5], [3,6,7]))
  
  console.log(mergeSort([2, 1, 3, 4, 10, 7]));



  ///---- RADIX SORT ----- ///

  function getDigit(num, pos) {
    return Math.floor(Math.abs(num/Math.pow(10, pos)%10))
  }
  
  function digitCount(num) {
    return Math.floor(Math.log10(Math.abs(num)))+1;
  }
  
  function maxDigit(array) {
    let max = 0;
    for (let i = 0 ; i < array.length; i++) {
      max = Math.max(max, digitCount(array[i]));
    }
    return max;
  }
  
  function radixSort(array) {
    let get_max = maxDigit(array);
    let digit_array = [[], [], [], [], [], [], [], [], []];
    let i =0
                       
    while(i < get_max) {
      for (let k = 0 ; k < array.length; k++) {
        let digit_last = getDigit(array[k], i);
        digit_array[digit_last].push(array[k]);
      }
      array = digit_array.toString().split(',');
      digit_array = [[], [], [], [], [], [], [], [], []];
      i += 1;
    }
    return array.filter((each_array) => {return each_array != ""}).map((each_array) =>  parseInt(each_array));
  }
  
  console.log(radixSort([23,6,8,20,12, 16, 17]));
  //--- END HERE ---- //

