//alert("this is working");
//variables
var number1 = 43;
var number2 = 22;
// alert(number1 + number2);
// console.log(number1+number2);

/*data types in JS
    1.primitive:undefined, null, number, string, boolean, symbol
    2.reference:arrays, objects
*/
var str = "this is string";
var str2 = "this is other string";

//objects
var marks = {
  ravi: 34,
  subh: 45,
  harry: 97,
};
// console.log(marks);
//booleans
var a = true;
var b = false;

var und = undefined;
//by default the value is undefined
//null is different from undefined

//arrays
var array = [1, 2, "hey"];
// console.log(array);

/*Operators in JS
    1.arithmetic : + - * /
    2.assignment : = -= += *= /=
    3.comparison : == => =< !=
    4.logical : && || not
*/

// FUNCTIONS
function avg(a, b) {
  return (a + b) / 2;
}
// console.log(avg(10,15));

//black : string
//blue : number

//conditionals
if (false) {
  // console.log("this is true");
} else {
  // console.log("this is false");
}

var arr = [1, 2, 3, 4, 5];
for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
}

//arr iteration using for each loop
arr.forEach(function (element) {
//   console.log(element);
});

let j = 0;
const ac = 0;
while(j<arr.length){
    //console.log(arr[j]);
    j++;
}

/*
do{

}while();
*/

// Array methods
let myarr=["fan",2,3,4,null,true];
// console.log(myarr.length);  //length of arrays
//myarr.pop();
myarr.push("rupam");
//console.log(myarr);
// console.log(myarr.length);
myarr.shift(); //remove first element from array
myarr.unshift("added"); //add first elemet to the array
// console.log(myarr.length);



//String methods
let str3="this is me me";
// console.log(str3.length);
// console.log(str3.indexOf("me"));
// console.log(str3.lastIndexOf("me"));

// console.log(str3.slice(0,4));

let d=str3.replace("me", "you");
// console.log(d); 
// console.log(str3);


