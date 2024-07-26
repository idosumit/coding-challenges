/*
Question from: https://www.codewars.com/kata/5601409514fc93442500010b/
Markdown version: ../Questions/compare-score-to-class-average.md

How good are you really?

There was a test in your class and you passed it. Congratulations!

But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return true if you're better, else false!

Note:
Your points are not included in the array of your class's points. Do not forget them when calculating the average score!
*/

'use strict';

function betterThanAverage(classPoints, yourPoints) {
	let classAverage = classPoints.reduce((acc, point, _, arr) => acc + point / arr.length, 0);
	return yourPoints > classAverage;
}

const classArr = [100, 40, 34, 57, 29, 72, 57, 88];
console.log(betterThanAverage(classArr, 75));
