/**
 * Write a function that takes targetSum and array of numbers as an arguments,
 * and return an array containing the shortest combination of numbers
 * that add up to exactly the targetSum.
 */

const bestSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum < 0) return null;
    if (targetSum === 0) return [];

    let shortestCombination = null;

    for (let number of numbers) {
        const remainder = targetSum - number;
        const remainderCombination = bestSum(remainder, numbers, memo);
        
        if (remainderCombination !== null) {
            const combination = [...remainderCombination, number]

            if (shortestCombination === null || combination.length < shortestCombination.length) {
                shortestCombination = combination;
            }
        }
    }

    memo[targetSum] = shortestCombination;
    return memo[targetSum];
}


console.log(bestSum(7, [1, 2, 3, 4, 7]));
console.log(bestSum(100, [1, 2, 5, 25]));
