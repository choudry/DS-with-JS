
const shortestPath = (edges, src, dest) => {
    const graph = buildGraph(edges);
    const queue = [ [ src, 0 ] ];
    const visited = new Set();
    
    while (queue.length > 0) {
        const [ current, distance ]  = queue.shift();
        if (current === dest) return distance;
        for (let neighbor of graph[current]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push([neighbor, distance + 1]);
            }
        }
    }

    return -1
}


const buildGraph = (edges) => {
    const graph = {};
    for (let edge of edges) {
        const [ nodeA, nodeB ] = edge;
        if (!(nodeA in graph)) graph[nodeA] = [];
        if (!(nodeB in graph)) graph[nodeB] = [];
        graph[nodeA].push(nodeB);
        graph[nodeB].push(nodeA);
    }

    return graph;
}

const edges = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v']
  ];
console.log(shortestPath(edges, 'w', 'z'));