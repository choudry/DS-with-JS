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

// const getNodeValue = (head, index) => {
//     let current = head
//     let itration = 0
//     while (current !== null) {
//         itration ++ 
//         if (itration === index) return current.val
//         current = current.next
//     }

//     return "Out of index"
// }

const getNodeValue = (head, index) => {
    if (head === null) return "Out of index"
    if (index === 0) return head.val
    return getNodeValue(head.next, index - 1)
}



console.log(getNodeValue(a, 2))