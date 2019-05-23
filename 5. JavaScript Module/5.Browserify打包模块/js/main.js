// CommonJS Style
var sum = require('./sum');
var values = [1, 2, 3];
var answer = sum(values);

document.getElementById("answer").innerHTML = answer;

// 去掉 `define`/`require` 包裹
// CommonJS in browser