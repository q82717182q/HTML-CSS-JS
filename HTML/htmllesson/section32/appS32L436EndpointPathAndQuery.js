function getData(name){
    if (name == "Jack") {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({name: "Jack", age: Math.floor(Math.random() * 200)});
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
                reject(new Error("not allowed. Too old."));
            }, 1500);
        });
    }
}

console.log("vvvvvvvvvvvvvvvstart");
// async await try catch 
// getData("Jack")
//     .then((obj) => {
//         console.log(obj);
//         return getMovies(obj.age);
//     })
//     .then((msg) => {
//         console.log(msg.text);
//     })
//     .catch((e) => {
//         console.log(e);
//     });
//改成async await用法
async function showMovie(){
    try{

        const obj = await getData("Jack");
        const msg = await getMovies(obj.age);
        console.log("-------------1");
        console.log(obj);
        console.log("-------------2");
        console.log(msg);
        console.log("-------------3");
        console.log(msg.text);
    }catch(e){
        console.log(e);
    }
};

showMovie();

console.log("----------------end");