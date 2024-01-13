
/**
 * 
 * @param { Object } graph 
 * @returns { Number }
 */
const largestComponent = (graph) => {
    let max = 0;
    let visited = new Set();

    for (let node in graph) {
        let size = explore(graph, node, visited)
        max = Math.max(size, max);
    }

    return max;
}

const explore = (graph, current, visited) => {
    if (visited.has(String(current))) return 0
    visited.add(String(current))
    let size = 1;
    for (let negighbor of graph[current]) {
        size += explore(graph, negighbor, visited);
    }

    return size;
}

const graph = {
    0: ['8', '1', '5'],
    1: ['0'],
    5: ['0', '8'],
    8: ['0', '5'],
    2: ['3', '4'],
    3: ['2', '4'],
    4: ['3', '2']
  }

  console.log(largestComponent(graph));