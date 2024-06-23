'use strict';

function factorial(n) {
    function factorialHelper(n, acc) {
        if (n <= 1) {
            return acc;
        }
        return factorialHelper(n - 1, n * acc); // 尾调用
    }
    return factorialHelper(n, 1);
}

console.log(factorial(5)); // 输出 120
