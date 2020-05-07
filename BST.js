class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BST {
    constructor() {
      this.root = null;
    }
    
    insert(val) {
        var newNode = new Node(val);
        if (!this.root) {
          this.root = newNode;
          return this;
        } else {
          var current = this.root;
          while(true) {
            if (val < current.value) {
              if (current.left == null) {
                current.left = newNode;
                return this;
              } else {
                current = current.left;
              }
            } else if (val >= current.value) {
              if (current.right == null) {
                current.right = newNode;
                return this;
              } else {
                current = current.right;
              }
              
            }
          }
        }
    }
    
    search(num) {
       var current = this.root;
      if (current == null) return false;
      var found = false;
       while(current && found == false) {
           if (num > current.value) {
             current = current.right;
           } else if (current.value > num) {
             current = current.left;
           } if (current.value == num) {
              found = true;
           }
       }
      return found;
    }
    
    BFS() {
      var queue = [];
      var visisted = [];
      var current = this.root;
      queue.push(current);
      while (queue.length) {
        current = queue.shift();
        visisted.push(current.value);
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
        
      } 
      return visisted;
    }
  }
  
  var tree = new BST();
  console.log(tree.insert(10));
  console.log(tree.insert(7));
  console.log(tree.insert(20));
  console.log(tree.search(7));
  console.log(tree.BFS())
  