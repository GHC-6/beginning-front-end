// add.js
(function(app) {
    return app.add = function(a, b) {
        return a + b;
    };
})(myApp); // IIFE (Immediately Invoked Function Expression)，立即调用函数表达式