class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const maxPathSum = (root) => {
    if (root === null) return -Infinity
    if (root.left === null && root.right === null) return root.val
    const maxChildSum = Math.max(maxPathSum(root.left), maxPathSum(root.right))
    return root.val + maxChildSum
}



/**
            1
          /    \ 
         2      3
       /   \     \
      4     5     6
 */
      const a = new Node(1)
      const b = new Node(2)
      const c = new Node(3)
      const d = new Node(4)
      const e = new Node(5)
      const f = new Node(6) 
      
      a.left = b;
      a.right = c;
      b.left = d;
      b.right = e;
      c.right = f;

      console.log(maxPathSum(a))



