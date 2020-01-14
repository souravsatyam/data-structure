max_count = 1
count = 1
let num_array = [50, 3, 10, 7, 40, 80]
const lengthsArray = Array(array.length).fill(1); //Array with length equal to num_array length 

let prev_index = 0
let current_index = 1

while (current_index < array.length) {

  if (array[prev_index] < array[current_index]) {
    let newLength =  lengthsArray[prev_index] + 1
    if (newLength > lengthsArray[current_index]) {
      lengthsArray[current_index] = newLength
    }
  }
  prev_index += 1
  if (prev_index == current_index) {
    current_index += 1
    prev_index = 0
  }
  
}
console.log(array)
console.log(lengthsArray)
