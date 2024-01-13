
/***
 * Depth first solution
 */

// const hasPath = (graph, src, dest) => {
//     if (src === dest) return true
//     const stack = [ src ]
//     let output = ""
//     while (stack.length > 0) {
//         const current = stack.pop()
//         if (current === dest) return true
//         for (let neighbor of graph[current]) {
//             stack.push(neighbor)
//         }
//     }

//     return false
// }

/**
 * Recursive version
 */

// const hasPath = (graph, src, dest) => {
//     if (src === dest) return true
//     for (let neighbor of graph[src]) {
//         if (hasPath(graph, neighbor,dest)=== true) {
//             return true
//         }
//     }

//     return false
// }

/**
 * Breadth first solution
 */

const hasPath = (graph, src, dest) => {
    if (src === dest) return true
    const queue = [ src ]
    while (queue.length > 0) {
        const current = queue.shift()
        if (current === dest) return true
        for (let neighbor of graph[current]) {
            queue.push(neighbor)
        }
    }

    return false
}


/**
 *              a == > b ==> d
 *             ||           ||
 *             V            V
 *             c ==> e      f
 */

const graph = {
    'a': ['b', 'c'],
    'b': ['d'],
    'c': ['e'],
    'd': ['f'],
    'e': [],
    'f': []
}

console.log(hasPath(graph, 'a', 'f'))