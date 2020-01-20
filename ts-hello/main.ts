// function log (message){
//     console.log(message);
// }

// var message = 'Hello World';

// log(message);  

var numver =1;
let count =2; 

// es5 
// es6(2015)
// es2016
// es2017

function doSomething(){
    for (let i = 0; i<5;i++){
        console.log(i);
    }
    // console.log('Finally: ' +i);
}

doSomething();

let a : number;
let b : boolean;
let c : string;
let d : any;
let e : number []= [1,2,3];
let f : any [] = [1,true,'a',false];

const ColorRed =0;
const ColorGreen =1;
const ColorBlue =2;

enum Color { Red=0, Green = 1, Blue =2};
let backgroundColor = Color.Red;