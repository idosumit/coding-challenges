/*
Question from: https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript
Markdown version available in: ../Questions/vowel-count.md

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

'use strict';

const getCount = (str) => {
	return [...str].reduce((acc, curVal) => ('aeiouAEIOU'.includes(curVal) ? ++acc : acc), 0);
};

console.log(getCount('Rendezvous'));
console.log(getCount('Tyrannosaurus'));
console.log(getCount('abracadabra'));
