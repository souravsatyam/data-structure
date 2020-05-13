class Graph {
  constructor() {
    this.adjancyList = {};
  }
  
  addVertex(vertex) {
    this.adjancyList[vertex] = [];
    return this.adjancyList;
  }
  addEdge(v1, v2) {
    if (v1 in this.adjancyList && v2 in this.adjancyList) {
        this.adjancyList[v1].push(v2);
      this.adjancyList[v2].push(v1);
    }
    return this.adjancyList;
  }
  
  removeEdge(v1, v2) {
    if (v1 in this.adjancyList && v2 in this.adjancyList) {
      this.adjancyList[v1].splice(this.adjancyList[v1].indexOf(v2), 1);
      this.adjancyList[v2].splice(this.adjancyList[v2].indexOf(v1), 1);
      
    }
    return this.adjancyList;
  }
  
  removeVertex(v1) {
    for(let key in this.adjancyList) {
      if (this.adjancyList[key].indexOf(v1) > -1) {
        this.removeEdge(key, v1);
      }
    }
    
    delete this.adjancyList[v1];
    return this.adjancyList;
  }
  
  dfsRecursive(start) {
      let result = [];
      let visited = {};
      let adjancyList = this.adjancyList;
   
    
    (function dfs(vertex) {
        if (!vertex) return null;
        visited[vertex] = true;
        console.log(visited);
        result.push(vertex);
        adjancyList[vertex].forEach(nei => {
          
          if (!visited[nei]) {
             return dfs(nei);
          }
        })
        
    })(start);
    return result;
  }

dfsIterative(start) {
  let stack = [start];
  let visited = {};
  let result = [];
  visited[start] = true;
  while(stack.length > 0) {
    let vertex = stack.pop();
    result.push(vertex);
    this.adjancyList[vertex].forEach((nei) => {
      if (!visited[nei]) {
        visited[nei] = true;
        stack.push(nei);
      }
    })
  }
  return result;
  
}

bfs(start) {
  let queue = [start];
  let visited = {};
  let result = [];
  visited[start] = true;
  while(queue.length > 0) {
    let vertex = queue.shift();
    result.push(vertex);
    this.adjancyList[vertex].forEach((nei) => {
      if (!visited[nei]) {
        visited[nei] = true;
        queue.push(nei);
      }
    });
    
  }
  return result;
}

}

const g = new Graph;
console.log(g.addVertex("A"));
console.log(g.addVertex("B"));
console.log(g.addVertex("C"));
console.log(g.addVertex("D"));
console.log(g.addVertex("E"));
console.log(g.addVertex("F"));
console.log(g.addEdge("A", "B"));
console.log(g.addEdge("A", "C"));
console.log(g.addEdge("E", "C"));
console.log(g.addEdge("B", "D"));
console.log(g.addEdge("E", "D"));
console.log(g.addEdge("F", "D"));
console.log(g.addEdge("E", "F"));
console.log(g.dfsRecursive("A"));
console.log(g.dfsIterative("A"));
console.log(g.bfs("A"));

