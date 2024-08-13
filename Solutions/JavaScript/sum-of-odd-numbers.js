// Markdown version: ../Solutions/JavaScript/sum-of-odd-numbers.md

"use strict";

/*
Need to get the formula for this.

1 --> 1 = 1 = 1^3
2 --> 8 = 3 + 5 = 2^3
3 --> 27 = 7 + 9 + 11 = 3^3
4 --> 64 = 13 + 15 + 17 + 19 = 4^3
n --> n^3
*/

const rowSumOddNumbers = (n) => Math.pow(n, 3);

console.log(rowSumOddNumbers(42));
