/*
Question from: https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript
Markdown version available in: ../Questions/square-every-digit.md
*/

"use strict";

const squareDigits = (num) => {
  if (!isFinite(num)) return;
  let numToArr = Array.from(num.toString());
  const squaredResult = numToArr.map((element) => element ** 2).join("");
  return Number(squaredResult);
};

console.log(squareDigits(3456));
