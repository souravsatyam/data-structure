class Node {
    constructor(val) {
        this.value = val;
        this.head = null;
        this.tail = null;
    }
  }
  
  class DoubleLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    
    
    push(val) {
      let newNode = new Node(val);
      if (this.length == 0) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
      this.length++;
      return this;
    }
    
    pop() {
      if (!this.head) return undefined;
      var tail = this.tail;
      if (this.length == 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.tail = tail.prev;
        this.tail.next = null;
        tail.prev = null;
      }
      this.length--;
      return this;
    }
    
    
    
    shift() {
      if (!this.head) return undefined;
      if(this.length == 1) {
        this.head = null;
        this.tail = null;
      } else {
        let head = this.head;
        this.head = head.next;
        this.head.prev = null;
        head.next = null;
      }
      
      this.length--;
      return this;
     }
    
    unshift(val) {
      var newNode = new Node(val);
      var oldNode = this.head;
      if (this.length == 0) {
        this.head = newNode;
        this.tail = newNode;
      }
      else {
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
      }
     this.length++;
     return this;
    }
    
    get(index) {
        if (index < 0 || index >= this.length) return undefined;
      if (index > this.length/2) {
        let count = 0;
        let current = this.head;
        while (count < index) {
            current = current.next;
            count++;
        }
        
      } else {
        let count = this.length;
        let current = this.tail;
        while (count > index) {
          current = current.prev;
          count --;
        }
      }
      return current;
    }
    
    set(index, val) {
      var get = this.get(index-1);
      if (get != null) {
        get.value = val;
        return true;
      }
      return false;
    }
    
    insert(index, value) {
      if (index < 0 || index > this.length) return undefined;
      if (index == 0) this.unshift(value);
      if (index == this.length) return this.push(value);
      var beforeNext = this.get(index-1);
      var afterNode = beforeNode.next;
      var newNode = new Node(value);
      beforeNext.next = newNode;
      newNode.next = afterNode;
      newNode.prev = beforeNext;
      afterNode.prev = newNode;
      this.length++;
      return true;
    }
    
    remove(index) {
      if (index < 0 || index >= this.length) return false;
      if (index == 0) return this.shift();
      if (index == this.length-1) return this.pop();
      var getNode = this.get(index);
      var beforeNode = getNode.prev;
      var afterNode = getNode.next;
      beforeNode.next = afterNode;
      afterNode.prev = beforeNode;
      getNode.next = null;
      getNode.prev = null;
      this.length--;
      return true;
        
    }
  }
  
  var list = new DoubleLinkedList;
  console.log(list.push(100));
  console.log(list.push(200));
  console.log(list.shift());