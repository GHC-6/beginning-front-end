requirejs.config({
    baseUrl: './js/app',
    paths: {
        jquery: [
            'https://cdn.bootcss.com/jquery/1.12.4/jquery.min',
            '../../lib/jquery-1.12.4.min' // 基于baseUrl
        ]
    }
});

// main.js
require(['jquery', 'sum'], function($, sum) {
    var values = [1, 2, 3];
    var answer = sum(values);

    $('#answer').html(answer);
    // document.getElementById("answer").innerHTML = answer;
});