class MaxBinaryHeap {
    constructor() {
      this.values = [];
    }
    
    insert(value) {
        this.values.push(value);
        if (this.values.length == 1) return this.values;
        let lastIndex = this.values.length - 1;
        
        var parentINdex = Math.floor((lastIndex-1)/2);
        while (this.values[parentINdex] < this.values[lastIndex]) {
          var temp = this.values[parentINdex];
          this.values[parentINdex] = this.values[lastIndex];
          this.values[lastIndex] = temp;
          
          lastIndex = parentINdex;
          parentINdex = Math.floor((lastIndex-1)/2);
        }
      
      return this.values;
    }
    
    extractMax() {
      this.values = this.swap(this.values, 0, this.values.length-1);
     
      this.values.pop();
      
      let curl = 0
      let leftIndex = 2*curl+1;
      let rightIndex = 2*curl+2;
      while(this.values[leftIndex] > this.values[curl] || this.values[rightIndex] > this.values[curl]) {
        let swapped_index = Math.max(this.values[leftIndex], this.values[rightIndex]);
        let get_Max = this.values.indexOf(swapped_index);
        console.log(get_Max);
        this.values = this.swap(this.values, curl, get_Max);
        curl = curl+1;
      }
      return this.values;
    }
    
    swap(array, first_index, second_index) {
      let temp = array[first_index];
      array[first_index] = array[second_index];
      array[second_index] = temp;
      return array;
    }
    
    
  }
  
  let binaryHeap = new MaxBinaryHeap;
  console.log(binaryHeap.insert(41))
  console.log(binaryHeap.insert(39))
  console.log(binaryHeap.insert(55))
  console.log(binaryHeap.insert(18))
  console.log(binaryHeap.insert(27));
  console.log(binaryHeap.insert(12))
  console.log(binaryHeap.insert(33))
  console.log(binaryHeap.extractMax())