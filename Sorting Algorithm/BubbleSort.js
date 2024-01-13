
/**
 * Time complexity = O(n^2)
 * Space complexity = O(1)
 */


const sortMe = (input) => {
    const length = input.length
    for (let i = 0; i < length; i++) {
        let swapped = false
        for (let j = 0; j < length - i; j++) {
            if (input[j] > input[j+1]) {
                const temp = input[j]
                input[j] = input[j+1]
                input[j+1] = temp
                swapped = true
            }
        }

        if (!swapped) break
    }

    console.table(input)
}

sortMe([1, 2, 3, 5, 4])

