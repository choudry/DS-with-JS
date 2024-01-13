/**
 * Write a function fib that accepts number n as input
 * and returns corresponding fibonacci number
 */

/** Memoization *****/
const fib = (n, memo = {}, count = 0) => {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    const result = fib(n - 1, memo) + fib(n - 2, memo);
    memo[n] = result;
    return result;
}


/** Tabulation ******/
const fibTabulation = (n) => {
    const numbers = Array(n + 1).fill(0);
    numbers[1] = 1;
    for (let i = 0; i <= n; i++) {
        numbers[i + 1] += numbers[i];
        numbers[i + 2] += numbers[i];
    }

    return numbers[n];
}




// 1  2  3  4  5  6.......n
// 1  1  2  3  5  8......(n - 1) + (n - 2)

console.log(fibTabulation(6));
