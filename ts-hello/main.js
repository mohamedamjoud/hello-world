// function log (message){
//     console.log(message);
// }
// var message = 'Hello World';
// log(message);  
var numver = 1;
var count = 2;
// es5 
// es6(2015)
// es2016
// es2017
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    // console.log('Finally: ' +i);
}
doSomething();
var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, 'a', false];
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var backgroundColor = Color.Red;
