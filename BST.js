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
    
    preOrderDFS() {
      var current = this.root;
      console.log(current.value);
      var data = [];
      
      function traverse(node) {
          data.push(node.value);
          if (node.left)  traverse(node.left);
          if (node.right)  traverse(node.right);
        
      }
      traverse(this.root);
      return data;
    }
    
    postOrderDFS() {
      var current = this.root;
      console.log(current.value);
      var data = [];
      
      function traverse(node) {
          
          if (node.left)  traverse(node.left);
          if (node.right)  traverse(node.right);
          data.push(node.value);
        
      }
      
      traverse(this.root);
      return data;
    }
    
    inOrderDFS() {
      var current = this.root;
      console.log(current.value);
      var data = [];
      
      function traverse(node) {
          
          if (node.left)  traverse(node.left);
          data.push(node.value);
          if (node.right)  traverse(node.right);
          
        
      }
      
      traverse(this.root);
      return data;
    }
  }
  
  var tree = new BST();
  console.log(tree.insert(10));
  console.log(tree.insert(7));
  console.log(tree.insert(20));
 console.log(tree.insert(12));
 console.log(tree.insert(15));
 console.log(tree.insert(2));
 console.log(tree.insert(50));
  console.log(tree.search(7));
  console.log(tree.BFS())
  console.log(tree.preOrderDFS());
console.log(tree.postOrderDFS());
console.log(tree.inOrderDFS());
  