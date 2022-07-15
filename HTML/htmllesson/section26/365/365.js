

const http = require("http");
const url = require("url");
const fs = require("fs");//拿到module
const path = require("path");



//要放兩個call back function
const server = http.createServer((req, res) => {
    // console.log(req);//這樣會印出很多信息
    console.log(req.url);
    console.log("--------------------0");
    // res.write("Hello user.");
    // res.end();//有寫就要有結束
    console.log("--------------------1");
    console.log("--------------------2");
    // let parsedURL = url.parse(req.url);
    // res.write("Hello, " + parsedURL.pathname);
    // res.end();//有寫就要有結束
    console.log("--------------------3");
    // if(req.url == "/"){
    //     res.write("You are on the homepage.");
    //     res.end();
    // }else{
    //     let parsedURL = url.parse(req.url);
    //     res.write("Hello, " + parsedURL.pathname);
    //     res.end();//有寫就要有結束
    // }


    console.log("--------------------4");
    // if(req.url == "/"){
    //     res.writeHead(200, { "Content-Type": "text/html"});
    //     res.write("<h1>You are on the homepage.</>");
    //     res.end();
    // }else{
    //     let parsedURL = url.parse(req.url);
    //     res.write("Hello, " + parsedURL.pathname);
    //     res.end();//有寫就要有結束
    // }
    console.log("--------------------5");
    //引入html的方式，但基本上不會有人這樣寫，都用express
    if(req.url == "/"){
        fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
            res.writeHead(200, { "Content-Type": "text/html"});//一切正常
            res.write(data);//這樣就能把整個html寫進來，但是這樣css直接引入會失效
            res.end();
        });
    }else{
        let parsedURL = url.parse(req.url);
        res.write("Hello, " + parsedURL.pathname);
        res.end();//有寫就要有結束
    }


    console.log("--------------------6");
    console.log("--------------------7");



});

//監聽3501得請求,這個server會一直跑，聆聽3501來得請求，所以這邊啟動之後不會直接結束
server.listen(3501, () => {
    console.log("Server is running on port 3501.");
});