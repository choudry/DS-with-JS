class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
} 



// A -> B -> C -> D -> NULL

const a = new Node(1)
const b = new Node(2)
const c = new Node(3)
const d = new Node(4)

a.next = b
b.next = c
c.next = d

const linkedListSum = (head) => {
    if (head === null) return 0;
    let listSum = 0;
    let current = head;
    while (current !== null) {
        listSum += current.val;;
        current = current.next;
    }

    return listSum;
}

const sumList = (head) => {
    if (head === null) return 0;
    return head.val + sumList(head.next)
}

console.log(linkedListSum(a))
console.log(sumList(a))