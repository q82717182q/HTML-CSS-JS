function getData(name){
    if (name == "Jack") {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({name: "Jack", age: Math.floor(Math.random() * 20)});
            }, 2000);
        });
    }else {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(new Error("Not allowed to access data."));
            }, 2000);
        });
    };

};

function getMovies(age){
    if(age < 12){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({text: "cartoon"});
            }, 1500);
        });
    }else if(age < 18){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({text: "teen movies"});
            }, 1500);
        });
    }else {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({text: "not allowed. Too old."});
            }, 1500);
        });
    }
}

console.log("vvvvvvvvvvvvvvvstart");
//getData會return所以可以接then
getData("Jack")
    .then((obj) => {
        console.log(obj);
        return getMovies(obj.age);
    })
    .then((msg) => {
        console.log(msg.text);
    })
    .catch((e) => {
        console.log(e);
    });

console.log("----------------end");