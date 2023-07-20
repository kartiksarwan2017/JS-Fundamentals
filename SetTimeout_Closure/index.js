/* setTimeout + Closures Interview Questions */

// function x() {
//     var  i = 1;
//     setTimeout(function(){
//         console.log(i);
//     }, 1000);
// }

// x();


// function x() {

//     var  i = 1;
//     setTimeout(function(){
//         console.log(i);
//     }, 3000);

//     console.log("Namaste Javascript");

// }

// x();


// function x(){
    
//     var i = 1;
//     setTimeout(function(){
//         console.log(i);
//     }, 1000);

//     console.log("Namaste Javascript");
// }

// x();



/* Mostly Asked Interview Questions */

/* Given a problem to print in the console
1 
2
3
4
5
after each second. 

i.e 1  after 1sec
    2  after 2sec
    3  after 3sec
    4  after 4sec
    5  after 5sec
*/


// function x() {

//     for(var i = 1; i <= 5; i++){
//         setTimeout(function() {
//             console.log(i);
//         }, i * 1000);
//     }

//     console.log("Namaste Javascript");
// }

// x();



// function x() {

//     for(let  i = 0; i <= 5; i++){
//         setTimeout(function(){
//             console.log(i);
//         }, i * 1000);
//     }

//     console.log("Namaste Javascript");
// }

// x();


/* How to resolve the issue without using let keyword */
// function x() {
//     for(var i = 0; i <= 5; i++){
//         setTimeout(function() {
//             console.log(i);
//         }, i * 1000);
//     }

//     console.log("Namaste Javascript");
// }

// x();


/* Using closures */
function x() {
    for(var i = 1; i <= 5; i++){
        function close(i){
            setTimeout(function(){
                console.log(i);
            }, i * 1000);
        }

        close(i);
    }

   console.log("Namaste Javascipt");
}

x();
