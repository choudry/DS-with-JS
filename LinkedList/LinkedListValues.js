class Node {
    constructor(val) {
        this.val = val
        this.next = null
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

// const printLinkedList = (head) => {
//     let current = head;
//     let nodes = "";
//     while(current !== null) {
//         nodes += current.val;
//         current = current.next;
//     }

//     return nodes
// }

const linkedListValues = (head) => {
    if (head === null) return ""
    return head.val + linkedListValues(head.next)
}

console.log(linkedListValues(a))