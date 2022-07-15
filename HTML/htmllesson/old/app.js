let Jack = {
    name: "Jack",
    age: 30,
    sayHi(){
        console.log("Jack says hi.");
    }
}

//屬性可以透過中括號跟點的方式呼叫
console.log(Jack.age);
console.log(Jack["age"]);

//方法只能透過點來呼叫
Jack.sayHi();
console.log("..............")
Jack["sayHi()"];