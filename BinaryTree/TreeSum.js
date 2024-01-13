class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// const treeSum = (root) => {
//     if (root === null) return 0
//     return root.val + treeSum(root.left) + treeSum(root.right)
// }

/**
 * Iterative Version
 */

const treeSum = (root) => {
    if (root === null) return 0
    let sum = 0
    const queue = [ root ]

    while (queue.length > 0) {
        const current = queue.shift();
        sum += current.val;
        
        if (current.left !== null) queue.push(current.left);
        if (current.right !== null) queue.push(current.right);
    }

    return sum;
};

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
      const f = new Node(-6) 
      
      a.left = b;
      a.right = c;
      b.left = d;
      b.right = e;
      c.right = f;

      console.log(treeSum(a))