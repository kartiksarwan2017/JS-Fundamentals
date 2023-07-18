/* Closures in Javascript */

// function x() {
    
//     var a = 7;
//     function y(){
//         console.log(a);
//     }

//     y();
// }

// x();


// function x() {
    
//     var a = 7;
//     var func = function y() {
//         console.log(a);
//     };

//     func();

// }

// x();


// function x(y) {
//     var a = 7;
//     y(a);
// }

// x(function y(a){
//     console.log(a);
// });


/* we can assign a function to a variable */
// function x(){

//     let b = 12;
//     var a = function y(){
//         console.log(b);
//     }

//     a();
// }

// x();


/* We can pass function as an argument / parameter to another function */
// function x(callback){
//     var a = 7;
//     callback(a);
// }

// x(function y(a){
//     console.log(a);
// });


/* We can even return these function from another function */
// function x() {
//     var a = 7;
//     function y() {
//         console.log(a);
//     }

//     return y;
// }

// var z = x();
// console.log(z);
// .............  1000s lines of code
// z();

 
/* Corner Cases in Closures */

// function x() {
    
//     var a = 7;
//     function y() {
//         console.log(a);
//     }

//     a = 100;
//     return y;

// }

// var z = x();
// console.log(z);
// // .....................
// z();




// function z() {
//     var b = 900;
//     function x() {
//         var a = 7;
//         function y() {
//             console.log(a);
//             console.log(b);
//         }

//         y();
//     }

//     x();
// }

// z();


