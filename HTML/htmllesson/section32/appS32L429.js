//sync code
// js is a single-thread programming language.

// function sayHello(){
//     console.log("hello");
//     console.log("How are you?");
// }

// console.log("vvvvvvvvvvvvvvvvvvvvvstart");

// sayHello();

// console.log("---------------------end");

//async code 異步

console.log("vvvvvvvvvvvvvvvvvvvvvstart");

setTimeout(() => {
    console.log("Here is the timeout code");
}, 2000)

console.log("---------------------end");
