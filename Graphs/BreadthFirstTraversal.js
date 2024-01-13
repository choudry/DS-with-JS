
/**
 * @param { Array } graph
 * @param { String } source
 * @returns { String }
 */
const depthFirstTraversal = (graph, source) => {
    const queue = [ source ]
    let output = ""
    while (queue.length > 0) {
        const current = queue.shift()
        output += current
        for (let neighbor of graph[current]) {
            queue.push(neighbor)
        }
    }

    return output
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

console.log(depthFirstTraversal(graph, 'a'))