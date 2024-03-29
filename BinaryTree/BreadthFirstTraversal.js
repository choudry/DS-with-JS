import Node from "./Node"

const breadthFirstTraversal = (root) => {
    if (root === null) return 
    const values = []
    const queue = [ root ]

    while (queue.length > 0) {
        const current = queue.shift()
        values.push(current.val)
        if (current.left !== null) queue.push(current.left)
        if (current.right !== null) queue.push(current.right)
    }

    return values
}

/**
            a
          /    \ 
         b      c
       /   \     \
      d     e     f
 */
      const a = new Node('a')
      const b = new Node('b')
      const c = new Node('c')
      const d = new Node('d')
      const e = new Node('e')
      const f = new Node('f')
      
      a.left = b;
      a.right = c;
      b.left = d;
      b.right = e;
      c.right = f;

      console.log(breadthFirstTraversal(a));
      