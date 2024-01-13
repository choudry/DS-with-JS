/**
 * Worst case complexity: If an array is in descending order and to arrange 
 * it in ascending order, for every nth element (n-1) number of comparisons
 * are made
 * O(n) = n(n-1) = O(n^2)
 * For space complexity, as we used only three extra variables (step, pointer and current) so space complexity is O(3) ~ O(1)
 */

const sortMe = (input) => {
    const length = input.length
    let step = 1
    let pointer = step - 1

    while (step < length) {
        const current = input[step]

        while (pointer >= 0 && input[pointer] > current) {
            input[pointer + 1] = input[pointer]
            pointer -= 1
        }
        
        console.log(`${step}: ${input}`)
        input[pointer + 1 ] = current

        step += 1
        pointer = step - 1
    }

    console.table(input)
}

sortMe([3, 2, 1])