//這樣會娶不到data
// function getData(name){
//     setTimeout(() => {
//         return {name: name, age: Math.random() * 20, major: "CS"};
//     }, 2000);
// };

// console.log("vvvvvvvvvvvvvvvstart");

// let data = getData("Jack");
// console.log(data);

// console.log("----------------end");

//所以要改成用callback function

function getData(name, callback){
    setTimeout(() => {
        callback({name: name, age: Math.floor(Math.random()) * 50, major: "CS"});
    }, 2000);
};

function getMovies(age, callback){
    if(age < 12){
        setTimeout(() => {
            callback("cartoon movies");
        }, 1500);
    }else if(age < 18){
        setTimeout(() => {
            callback("teen movies");
        }, 1500);
    }else {
        setTimeout(() => {
            callback("adult movies");
        }, 1500);
    }
}

console.log("vvvvvvvvvvvvvvvstart");

getData("Jack", (obj) => {
    getMovies(obj.age, (str) => {
        console.log(str);
    });
});

console.log("----------------end");