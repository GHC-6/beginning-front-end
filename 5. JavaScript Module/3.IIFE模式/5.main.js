// main.js
(function(app) {
    var values = [1, 2, 3];
    var answer = app.sum(values);

    document.getElementById("answer").innerHTML = answer;
})(myApp); // 引入依赖 myApp

console.log(myApp.add(1,1)); // 可通过模块对象对外公开函数实现复用