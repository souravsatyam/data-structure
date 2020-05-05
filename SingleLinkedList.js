class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SingleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
      this.length++;
      return this;
    }

    traverse() {
        var current = this.head;
        console.log(current.value);
        var val = [];
        while(current)  {
            val.push(current.value);
            current = current.next;
        }
        return val;
    }
  
  pop() {
    
    if (!this.head) return undefined;
    var current = this.head;
    var newNode = current;
    while(current.next) {
      newNode = current;
      current = current.next;
    }
    this.tail = newNode;
    this.tail.next = null;
    this.length--;
    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
    
  }
  
  shift() {
    if (!this.head) return undefined;
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length--) {
      this.tail = null;
    }
    return currentHead;
  }
  
  unshift(val) {
    var currentNode = new Node(val);
    if (!this.head)  {
      this.head = currentNode;
      this.tail = this.head;
    } 
    currentNode.next = this.head;
    this.head = currentNode;
    this.length++;
    return this;
  }
  
  get(index) {
      if (index < 0 || index >= this.length) return null;
      let items = this.head;
      let counter = 0;
      while(counter < index) {
            items = items.next;
            counter++;
      }
    return items;
  }
  set(val, index) {
    var get = this.get(index);
    if(get) {
      get.value = val;
      return true;
    }
    return false;
  }
  
  insert(val, index) {
    if (index < 0 || index > this.length) return false;
    if (index == this.length) {
      this.push(val);
    } 
    else if (index == 0) {
      this.unshift(val);
    }
    else {
      var prev = this.get(index-1);
      var newNode = new Node(val);
      var current = prev.next;
      prev.next = newNode;
      newNode.next = current;
    }
    this.length++;
    return true;
  }
  
  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index == this.length-1) return this.shift();
    if (index == 0) return this.pop();
    var cur = this.get(index-1);
    var nextVal = cur.next;
    cur.next = nextVal.next;
    this.length--;
    return this.length;
  }
  
  reverse() {
    var node = this.head;
    this.head = this.tail;
    this.tail = node;
    var prev = null;
    var next ;
    console.log(this.length);
    for (let i = 0 ; i < this.length-1; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
  
  getLength() {
    return this.length;
  }
  
  
} 

let list = new SingleLinkedList;
list.push("Hello");
list.push("Sola");

console.log(list.traverse());
//list.pop();
console.log(list.traverse());
list.unshift("Hola");
console.log(list.traverse());
console.log(list.get(1));
console.log(list.set("Tola", 1));
console.log(list.get(1));
console.log(list.set("Kola", 1));
console.log(list.traverse());
console.log(list.getLength());
console.log(list.insert("Gourav", 3));
console.log(list.traverse());
console.log(list.remove(2));
console.log(list.traverse());
console.log(list.reverse());
console.log(list.traverse());
console.log(list.getLength());
