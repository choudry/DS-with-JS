

const depthFirstTraversal = (graph, source) => {
    const stack = [ source ]
    let output = ""
    while (stack.length > 0) {
        const current = stack.pop()
        output += current
        for (let neighbor of graph[current]) {
            stack.push(neighbor)
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