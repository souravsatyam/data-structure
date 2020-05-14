class PriorityQueue {
    constructor() {
        this.val = [];
    }
    
    enqueue(val, priority) {
      this.val.push({val, priority});
      this.sort();
    }
    
    dequeue() {
      return this.val.shift();
    }
    
    sort() {
      return this.val.sort((a, b) =>  a.priority-b.priority );
    }
  }
  
  
  class WeightedGraph {
    constructor() {
      this.adjancyList = {};
    }
    
    addVertex(vertex) {
      if (!this.adjancyList[vertex]) this.adjancyList[vertex] = [];
      return this.adjancyList;
    }
    
    addEdge(vertex1, vertex2, weight) {
      this.adjancyList[vertex1].push({node: vertex2, weight: weight});
      this.adjancyList[vertex2].push({node: vertex1, weight: weight});
      return this.adjancyList;
    }
    
    dijstra(vertex1, vertex2) {
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let smallest ;
      let path = [];
        for (let vertex in this.adjancyList) {
          if(vertex == vertex1) {
            distances[vertex1] = 0;
            nodes.enqueue(vertex, 0);
          } else {
            distances[vertex] = Infinity;
            nodes.enqueue(vertex, Infinity);
          }
          previous[vertex] = null;
        }
      
      while(nodes.val.length) {
        smallest = nodes.dequeue().val;
        
        if (smallest == vertex2) {
            while(previous[smallest]) {
              path.push(smallest);
              smallest = previous[smallest];
            }
          path.push(vertex1);
          break;
          
        }
        
        if (smallest || distances[smallest] != Infinity) {
          for (let neighbour in this.adjancyList[smallest]) {
              let neighbout_node = this.adjancyList[smallest][neighbour]; //find neighbout Node 
              console.log(neighbout_node);
              let candidate = distances[smallest] + neighbout_node.weight;
              if (candidate < distances[neighbout_node.node]) {
                distances[neighbout_node.node] = candidate;
                previous[neighbout_node.node] = smallest;
                nodes.enqueue(neighbout_node.node, candidate)
              }
          }
        }
        
      }
      return path;
    }
  }
  
  const g = new WeightedGraph;
  console.log(g.addVertex("A"));
  console.log(g.addVertex("B"));
  console.log(g.addVertex("C"));
  console.log(g.addVertex("D"));
  console.log(g.addVertex("E"));
  console.log(g.addVertex("F"));
  console.log(g.addEdge("A", "B", 4));
  console.log(g.addEdge("A", "C", 2));
  console.log(g.addEdge("C", "D", 2));
  console.log(g.addEdge("C", "F", 4));
  console.log(g.addEdge("D", "F", 1));
  console.log(g.addEdge("F", "E", 1));
  console.log(g.addEdge("D", "E", 3));
  console.log(g.addEdge("B", "E", 3));
  console.log(g.dijstra("A", "E"));
  