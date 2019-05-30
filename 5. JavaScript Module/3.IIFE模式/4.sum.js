// sum.js
(function(app) {
    return app.sum = function(arr) {
        return app.reduce(arr, app.add);
    };
})(myApp);