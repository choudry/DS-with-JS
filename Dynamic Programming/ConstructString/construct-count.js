/**
 * write a function constructCount that accepts target string 
 * and an array of strings (wordBank), and return the number of ways 
 * that the target string can be constructed by concatenating
 * elements of the wordBank
 */

/**
 * 
 * @param { String } target 
 * @param { Array } wordBank 
 * @param { Object } memo 
 * @returns { Number }
 */

const constructCount = function(target, wordBank, memo = {}) {
    if (target in memo) return memo[target];
    if (target === '') return 1;
    let totalCount = 0;
    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const numWaysForRest = constructCount(target.slice(word.length), wordBank, memo);
            count += numWaysForRest;
        }
    }
    memo[target] = totalCount;
    return totalCount;
}

console.log(constructCount('abc', ['a', 'b', 'c', 'ab', 'bc']));

/**
 * m = target.length
 * n = wordBank.length
 */