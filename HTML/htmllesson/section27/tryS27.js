function sayHi(){
    console.log("hello");
}

// module.exports.sayHi = sayHi;//這樣別人取到的是一個object
module.exports = sayHi;//只有一個function時這樣用