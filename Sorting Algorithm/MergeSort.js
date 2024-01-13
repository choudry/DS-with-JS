

const sortMe = (input) => {
    if (input.length === 1) return input
    const mid = input.length / 2
    const firstHalf = input.slice(0, mid)
    const secondHalf = input.slice(mid)
    const sub1 = sortMe(firstHalf)
    const sub2 = sortMe(secondHalf)
    const result = merge(sub1, sub2)
    return result
}

const merge = (sub1, sub2) => {
    let i = 0
    let j = 0
    const temp = []
    while (i < sub1.length && j < sub2.length) {
        if (sub1[i] <= sub2[j]) {
            temp.push(sub1[i])
            i += 1
        } else {
            temp.push(sub2[j])
            j += 1
        }
    }

    while (i < sub1.length) {
        temp.push(sub1[i])
        i += 1
    }

    while (j < sub2.length) {
        temp.push(sub2[j])
        j += 1
    }

    return temp
}


console.table(sortMe([4, 3, 2, 5, 1]))