/**
 * write a function canConstruct that accepts target string 
 * and an array of strings, and returns boolean indicating
 * whether or not target can be constructed by concatenating
 * elements of the array
 */


const canConstruct = (target, wordBank, memo = {}) => {
    if (target === "") return true
    if (target in memo) return memo[target];
    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const result = canConstruct(suffix, wordBank, memo);
            if (result === true) {
                memo[target] = true;
                return true;
            }
        }
    }

    memo[target] = false;
    return false;
}

console.log(canConstruct('abcdef', ['ab', 'cd', 'ef', 'aa', 'a', 'b']));
console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log(canConstruct('enterpotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee']));

