class Node{
    constructor(val) {
      this.value = val;
      this.next = null;
    }
  }
  
  class Stack {
    constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
    }
    
    push(val) {
        let newNode = new Node(val);
        if (!this.first) {
          this.first = newNode;
          this.last = newNode;
        } else {
          var temp = this.first;
          this.first = newNode;
          this.first.next = temp
        }
      return ++this.size;
    }
    
    pop() {
      if (this.size == 0) return null;
      let removeNode = this.first;
      if (this.first === this.last) this.last = null;
      this.first = removeNode.next;
      this.size--;
      return removeNode.value;
    }
  }
  