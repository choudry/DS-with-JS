class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
} 



// A -> B -> C -> D -> NULL

const a = new Node('A')
const b = new Node('B')
const c = new Node('C')
const d = new Node('D')

a.next = b
b.next = c
c.next = d

// const linkedListFind = (head, target) => {
//     if (head === null) return false
//     if (head.val === target) return true
//     return linkedListFind(head.next, target)
// }

const linkedListFind = (head, target) => {
    if (head === null) return false
    let current = head
    while (current !== null) {
        if (current.val === target) return true
        current = current.next
    }
    return false
}


console.log(linkedListFind(a, 'D'))