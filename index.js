// var x = 10;

// function getName() {
// console.log("Hello World");
// }

// console.log(x);
// console.log(getName);
// getName();

/* Hoisting in JS */
                                                                    

// console.log(x);   /* undefined  */
// getName();      

// var x = 10;

// function getName() {
// console.log("Hello World");
// }

// console.log(x);     /*  10  */
// console.log(getName);  /* function definition  */




// function fun() {
//     return {
//     a: "hii"
//     }
// }

// function fun1() {
//     return;
//     {
//     a: "hello";
//     }
// }

// console.log(fun());  /* hii */    /* {a: 'hii'} */
// console.log(fun1());  /* hello */  /* undefined */




// function getName(name, callback){

//     console.log(name);
//     callback("Sarwan");
// }

// function getSurname(surname){
//     console.log(surname);
// }

// getName("Kartik", getSurname);



// function getName(name, callback){

//     console.log(name);
//     callback("Sarwan");

// }

// getName("Kartik", (surname) => {
//     console.log(surname);
// });


// var x = 10;
// function getName() {
//     console.log("Hello World");
// }

// console.log(x);
// console.log(getName);
// getName();


/* Hoisting */


// console.log(x);   /* undefined */
// getName();       
// console.log(getName);  /* getName function definition */

// var x = 10;
// function getName() {
//     console.log("Hello World");
// }


/* callback */

// function getName(name, getSurname){

//     console.log(name);
//     getSurname("Sarwan");
// }

// function getSurname(surname){
//     console.log(surname);
// }

// getName("Kartik", getSurname);


// var a= 75;
// function fun(){
// b = 16;
// console.log(a);
// var a =12;
// }
// function fun1(){
// console.log(b);
// }
// fun();
// fun1();


// var fruits = ["apple", "mango", "watermelon", "orange"];
// var fruits_len = fruits.map((ele) => ele.length);
// console.log(fruits_len)


// var fruits = ["apple", "mango", "watermelon", "orange"];
// var even_fruits = fruits.filter(ele => ele.length % 2 !== 0);
// console.log(even_fruits)


const number = 1;
const result = (function () {
delete number;
return number;
})();

console.log(number);




