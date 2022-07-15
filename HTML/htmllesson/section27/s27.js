

// const myTryCode = require("./tryS27");
// console.log(myTryCode);
// console.log(typeof(myTryCode));
// myTryCode();

//routing in express

const express = require('express');
const app = express();
const path = require("path");//L374
const bodyParser = require("body-parser");//L374fffffffffffffffff

//L374 middleware不管是收到get還是post都會執行
app.use(bodyParser.urlencoded({ extended: true}));//這樣req.body就能收到post資訊了

//request handling
app.get("/", (req, res) => {//這邊是說當get請求的時候req與res要幹嘛
    // console.log(req);
    // console.log(res);
    // res.send("<h1>You are on the homepage.</>");//東西太多可以改成sendFile
    // res.send("<h1>You are on the homepage.</>");//不可以send兩次response
    // res.sendFile(__dirname + "/s26index.html");//L373
    res.sendFile(path.join(__dirname, "s26index.html"));

});

//374 routing for query
app.post("/formHandling", (req, res) => {
    // console.log(req.body);
    // res.send("Thanks for posting.");

    let {fullname, age} = req.body;
    res.send(`Thanks for posting. Your name is ${fullname}, and your age is ${age}.`);

});


app.get("/jack", (req, res) =>{
    res.send("This is Jack's homepage.");
});

app.get("/apple", (req, res) => {
    res.send("This is Apple Company's homepage.");
});


//L374 routing for all，不符合的都跑到這邊
// app.get("*", (req, res) => {
//     res.send("Cannot find what you want.");
// });

//L374 routing for pattern
// app.get("/fruit/:someFruit", (req, res) => {
//     // console.log(req.params);
//     let {someFruit} = req.params;//destructing an object
//     res.send("You are looking for " + someFruit);
// });



app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});
