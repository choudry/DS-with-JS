/**
 * Time complexity = O(n^2)
 * Space complexity = O(1)
 */


// To sort in ascending order
// const sortMe = (input) => {
//     const length = input.length
//     for (let i = 0; i < length; i++) {
//         let swapped = false
//         let minIndex = i;
//         for (let j = i+1; j < length; j++) {
//             if (input[j] < input[minIndex]) {
//                 minIndex = j
//                 swapped = true
//             }
//         }

//         if (!swapped) break
//         if (i !== minIndex) {
//             let temp = input[i]
//             input[i] = input[minIndex]
//             input[minIndex] = temp
//         }
//     }

//     console.table(input)
// }

// To sort in descending order
const sortMe = (input) => {
    const length = input.length
    for (let i = 0; i < length; i++) {
        let swapped = false
        let maxIndex = i;
        for (let j = i+1; j < length; j++) {
            if (input[j] > input[maxIndex]) {
                maxIndex = j
                swapped = true
            }
        }

        if (!swapped) break
        if (i !== maxIndex) {
            let temp = input[i]
            input[i] = input[maxIndex]
            input[maxIndex] = temp
        }
    }

    console.table(input)
}

sortMe([5, 4, 3])

