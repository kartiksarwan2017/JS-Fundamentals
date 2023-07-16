const grandParent = document.querySelector("#grandParent");
const parent = document.querySelector("#parent");
const child = document.querySelector("#child");

/* Order of execution 
   child Clicked
   Parent Clicked 
   GrandParent Clicked


   i.e events are propagating up the hierarchy -> events are bubbling out


 */

// grandParent.addEventListener("click", () => {
//     console.log("Grandparent Clicked!");
// });

// parent.addEventListener("click", () => {
//     console.log("Parent Clicked!");
// });

// child.addEventListener("click", () => {
//     console.log("Child Clicked!");
// });



// grandParent.addEventListener("click", () => {
//     console.log("Grandparent Clicked!");
// }, false);

// parent.addEventListener("click", () => {
//     console.log("Parent Clicked!");
// }, false);

// child.addEventListener("click", () => {
//     console.log("Child Clicked!");
// }, false);




// grandParent.addEventListener("click", () => {
//     console.log("Grandparent Clicked!");
// }, true);

// parent.addEventListener("click", () => {
//     console.log("Parent Clicked!");
// }, true);

// child.addEventListener("click", () => {
//     console.log("Child Clicked!");
// }, true);




/* when the event was capturing down
becoz of true flag the clicked handler was called 
first
grand parent clicked clicked

then it went to the parent div
in that 3rd argument is false
i.e it wont cover it in capturing cycle
bacause of false tag the call back method of 
parent event listener is not called
it will be called in the bubbling stage 
when events will be bubbling out


in child event listener it is true so
it is printed since we are in capturing down phase
call back method is called and child clicked is printed


when the half cycle of capturing is completed
then we move on to the bubbling cycle
and in that bubbling cycle we saw the event listener of
parent is having false so callback for it is called
and we printed Parent Clicked!

*/
// grandParent.addEventListener("click", () => {
//     console.log("Grandparent Clicked!");
// }, true);   // capturing

// parent.addEventListener("click", () => {
//     console.log("Parent Clicked!");
// }, false);  // bubbling

// child.addEventListener("click", () => {
//     console.log("Child Clicked!");
// }, true);   // capturing



// grandParent.addEventListener("click", () => {
//     console.log("Grandparent Clicked!");
// }, true);   // capturing

// parent.addEventListener("click", () => {
//     console.log("Parent Clicked!");
// }, false);  // bubbling

// child.addEventListener("click", () => {
//     console.log("Child Clicked!");
// }, false);   // bubbling
/* what if we clikc on child div and parent div */



// grandParent.addEventListener("click", () => {
//     console.log("Grandparent Clicked!");
// }, false);   

// parent.addEventListener("click", (e) => {
//     console.log("Parent Clicked!");
//     e.stopPropagation();
// }, false);  

// child.addEventListener("click", () => {
//     console.log("Child Clicked!");
// }, false);   

/* Here in this case the propagation start from child then parent and it see that we have stopPropagation()  cycle
so it will stop and not print the event grandparent*/




// grandParent.addEventListener("click", () => {
//     console.log("Grandparent Clicked!");
// }, false);   

// parent.addEventListener("click", (e) => {
//     console.log("Parent Clicked!");

// }, false);  

// child.addEventListener("click", (e) => {
//     console.log("Child Clicked!");
//     e.stopPropagation();
// }, false);   




// grandParent.addEventListener("click", (e) => {
//     console.log("Grandparent Clicked!");
//     e.stopPropagation();
// }, true);   

// parent.addEventListener("click", (e) => {
//     console.log("Parent Clicked!");

// }, true);  

// child.addEventListener("click", (e) => {
//     console.log("Child Clicked!");
  
// }, true);  




// var a = 10;

// console.log(a);  /* 10 */ 


// var a = 10;

// var a = 1000;

// console.log(a);


// let a = 10;
// let a = 1000;

// console.log(a);


// console.log(a);

// let a = 10;


// let a = 10;

// a = 200;

// console.log(a);


// const a = 100;

// a = 200;

// console.log(a);


// const a = 200;

// console.log(a);





