let example = new Promise((resolve, reject) => {
    // resolve({name: "Jack", age: 30});
    reject(new Error("not allowed"));
});

example
    .then((d) => {
        console.log(d);
    })
    .catch((e) => {
        console.log(e);
    });