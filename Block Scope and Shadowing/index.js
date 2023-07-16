/* Block Scope and Shadowing in Javascript */

// {
//     // compund statement
//     var a = 10;
//     console.log(a);
// }

/* if statements expect a statment over here this could be a single statement or a multiple statements can be wrapped with a block */
// if(true)


// if(true){
//     var a = 10;
//     console.log(a);
// }


// if(true) console.log("single statement is executed");

// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
// }


// {
//     var a = 10;
//     let b = 20;
//     const c = 30;

//     console.log(a);
//     console.log(b);
//     console.log(c);
// }


// console.log(a);
// console.log(b);
// console.log(c);


/* Shadowing in Javascript */
// var a = 100;
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;

//     console.log(a);
//     console.log(b);
//     console.log(c);
// }



/* variable a shadows the variable a in global scope and it also modified the value 
of a in global scope */

// var a = 100;
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;

//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// console.log(a);

/* Here variable in block scope shadows the variable b outside the block scope */
// let b = 100;
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;

//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// console.log(b);


// const c = 100;
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;

//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// console.log(c);


// const c = 100;
// function x(){
//     const c = 30;
//     console.log(c);
// }

// x();
// console.log(c);



/* Illegal Shadowing in Javascript */
// var a = 20;
// {
//     var a = 100;
// }

// console.log(a);


/* You can shadow a let using a let, but you cannot shadow a let using var */
// let a = 20;
// {
//     var a = 20;
// }


// let a = 20;
// {
//     let a = 10;
//     console.log(a);
// }
// console.log(a);

// var a = 20;
// {
//     let a = 10;
//     console.log(a);   
// }
// console.log(a);


/* If a variable is shadowing something, it should not cross the boundary
of its scope. */



// let a = 20;
// function x(){
//     var a = 20;
//     console.log(a);
// }

// x();
// console.log(a);


// const a = 20;
// {
//     const a = 10;
//     console.log(a);
// }

// console.log(a);


/* Lexical Block Scope with code examples */
// const a = 20;
// {
//     const a = 100;
//     {
//         const a = 200;
//         console.log(a);
//     }
// }


// const a = 20;
// {
//     const a = 100;
//     {
//         const a = 200;
//     }

//     console.log(a);
// }

/* Lexical scope works in the same way in the block scope also. */
// const a = 20;
// {
//     const a = 100;
//     {
//         console.log(a);
//     }
// }

// console.log(a);