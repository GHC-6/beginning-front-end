(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// add.js

// CommonJS Style
module.exports = function add(a, b) {
    return a + b;
};
},{}],2:[function(require,module,exports){
// CommonJS Style
var sum = require('./sum');
var values = [1, 2, 3];
var answer = sum(values);

document.getElementById("answer").innerHTML = answer;

// 去掉 `define`/`require` 包裹
// CommonJS in browser
},{"./sum":4}],3:[function(require,module,exports){
// reduce.js

// CommonJS Style
module.exports = function reduce(arr, add) {
    var index = 0,
        length = arr.length,
        currentValue = arr[index];

    index += 1;
    for (; index < length; index += 1) {
        currentValue = add(currentValue, arr[index])
    }
    return currentValue;
};
},{}],4:[function(require,module,exports){
// sum.js

// CommonJS Style
var reduce = require('./reduce');
var add = require('./add');

module.exports = function(arr) {
    return reduce(arr, add);
};
},{"./add":1,"./reduce":3}]},{},[2]);
