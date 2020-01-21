// function log (message){
//     console.log(message);
// }
// var message = 'Hello World';
// log(message);
// -------------------------------- Declaring Variables --------------------------------
// var numver = 1;
// let count = 2;
// es5
// es6(2015)
// es2016
// es2017
// function doSomething(){
//     for (let i = 0; i < 5; i++){
//         console.log('' + i);
//     }
//     // console.log('Finally: ' +i);
// }
//  doSomething();
//  -------------------------------- Types --------------------------------
// let a:number;
// let b:boolean;
// let c:string;
// let d:any;
// let e : number []= [1,2,3];
// let f : any [] = [1,true,'a',false];
// const ColorRed =0;
// const ColorGreen =1;
// const ColorBlue =2;
// enum Color { Red=0, Green = 1, Blue =2};
// let backgroundColor = Color.Red;
// -------------------------------- TypeAssertions --------------------------------
// let message_;
// message_ = 'abc';
// let endsWithC = (<string>message_).endsWith('c');
// let alternativeWay = (message_ as string).endsWith('c');
// -------------------------------- Arrow Functions --------------------------------
// let log_ = function(message){
//     console.log(message);
// }
// let doLog = (message : any) => console.log(message);
// -------------------------------- Interfacess --------------------------------
// bad
// let drawPoint = (a,b,c,d,e,f,g,h,i) => {
// }
// good
// there is to way
// first one : inline annotation
// let drawPoint = (point : {x:number , y:number}) => {
// }
// drawPoint ({
//     x:1,
//     y:2
// });
//     // seconde one : Interface
// interface IPoint_ {
//     x:number,
//     y:number
// }
// var drawPoint_ = (point : IPoint_) => {
//     //...
// }
// drawPoint_ ({
//     x:1,
//     y:2
// })
// -------------------------------- Classes --------------------------------
// Cohesion
// interface IPoint {
//     x:number,
//     y:number
//     draw : () => void
// }
// class Point{
//     private x:number;
//     private  y:number;
//     constructor(x? : number, y? : number) {
//         this.x=x;
//         this.y=y;
//     }
//     draw () {
//         console.log('X:'+ this.x + ',Y:' +this.y);
//     }
//     getDistance (pointA:Point, pointB:Point) {
//         // ...
//     }
// }
// var point = new Point(1,2) ;
// point.x = 1;
// point.y = 2;
// point.draw();
// -------------------------------- Access Modifiers & Properties--------------------------------
// public
// private
// protected
var Point = (function () {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point.prototype.draw = function () {
        console.log('X:' + this._x + ',Y:' + this._y);
    };

    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value < 0)
                throw new Error('value cannot be less than 0');

            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    return Point;
})();

var point = new Point(1, 2);
var x = point.x;
point.x = 10;
point.draw();
// -------------------------------- modules --------------------------------
// import { Point } from './point';
// let point = new Point(1,2);
// point.draw();
