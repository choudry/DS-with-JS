class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

    const treeMinValue = (root) => {
        if (root === null) return Infinity
            return Math.min(root.val, treeMinValue(root.left), treeMinValue(root.right))
    };
    
    /**
     * Iterative Version
     */
    
    // const treeMinValue = (root) => {
    //     if (root === null) return 0
    //     let smallest = Infinity

    //     const stack = [ root ]
    
    //     while (stack.length > 0) {
    //         const current = stack.pop()
    //         if (current.val < smallest) smallest = current.val
            
    //         if (current.left !== null) stack.push(current.left);
    //         if (current.right !== null) stack.push(current.right);
    //     }
    
    //     return smallest;
    // };

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

      console.log(treeMinValue(a))