define(function(){'use strict';// add.js
let add = (a,b) => a + b;// reduce.js
var reduce = (arr, add) => {
    let index = 0,
        length = arr.length,
        currentValue = arr[index];

    index += 1;

    for (; index < length; index += 1) {
        currentValue = add(currentValue, arr[index]);
    }

    return currentValue;
};// sum.js

var sum = (arr) => reduce(arr, add);// main.js

let values = [1, 2, 3];
let answer = sum(values);

document.getElementById("answer").innerHTML = answer;});
