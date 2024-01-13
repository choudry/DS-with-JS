
/**
 *  Time comlplexit: O(n) as every nod is visited only once
 *  Space complexity: O(2) ~ O(1) as two extra variables count and visted are used
 */

/**
 * @param { Object } graph 
 * @returns Number
 */

const connectedComponentsCount = (graph) => {
    let count = 0
    const visited = new Set();
    for (let node in graph) {
        if (explore(graph, node, visited) === true) {
            count += 1
        } 
    }

    return count;
}

const explore = (graph, current, visited) => {
    if (visited.has(String(current))) return false;
    visited.add(String(current));
    for (let neighbor of graph[current]) {
        explore(graph, neighbor, visited);
    }

    return true;
}

const graph = {
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
  };

  console.log(connectedComponentsCount(graph));