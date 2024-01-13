/**
 * write a function allConstruct that accepts target string 
 * and an array of strings (wordBank), and return a 2D array contaning all
 * of the ways that the target can be constructed by concatenating 
 * elements of the wordBank array
 */

const allConstruct = (target, wordBank) => {
    if (target === '') return [[]];

    const result = [];
    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const suffixWays  = allConstruct(suffix, wordBank);
            const targetWays = suffixWays.map(way => [word, ...way]);
            result.push(...targetWays);
        }
    }

    return result;
}

console.log(allConstruct('pakistan', ['pa', 'kis', 'tan', 'pakist', 'an', 'a', 'n']));
