/*
Question from: https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript
Markdown version available in: ../Questions/square-every-digit.md

Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 9^2 is 81 and 1^2 is 1.
*/

'use strict';

const squareDigits = (num) => {
	if (!isFinite(num)) return;
	let numToArr = Array.from(num.toString());
	const squaredResult = numToArr.map((element) => element ** 2).join('');
	return Number(squaredResult);
};

console.log(squareDigits(3456));
