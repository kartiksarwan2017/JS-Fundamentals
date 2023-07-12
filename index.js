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




function fun() {
    return {
    a: "hii"
    }
}

function fun1() {
    return;
    {
    a: "hello";
    }
}

console.log(fun());  /* hii */    /* {a: 'hii'} */
console.log(fun1());  /* hello */  /* undefined */