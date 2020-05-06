class Node {
    constructor(val) {
      this.value = val;
      this.next = null;
    }
  }
  
  class Queue {
    constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
    }
    
    enqueue(val) {
      var newNode = new Node(val);
    
      if (!this.first) {
        this.first = newNode;
        this.last = newNode;
      } else {
        this.last.next = newNode;
        this.last = newNode;
      }
      this.size++;
    }
    
    dequeue() {
      if (!this.first) return null;
      if (this.first == this.last) this.last = null;
      var tmp = this.first;
      this.first = this.first.next;
      this.size--;
      return tmp.value;
    }
    
    
  }