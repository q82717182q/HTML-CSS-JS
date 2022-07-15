//直接用path就可以用內建的module
//https://nodejs.org/api/path.html

let path = require("path");

//join可以把東西串再一起
console.log("--------------------0");
console.log(path.join(__dirname,"JackIsHandSome"));
console.log("--------------------1");
console.log(path.extname(__filename));
console.log("--------------------2");
console.log(path.basename(__filename));
console.log("--------------------3");
//用 const 裝url比較合理
const url = require("url");

const youtubeURL = "https://www.youtube.com/watch?v=ACuZEmALhB4";
const logicURL = "http://localhost:8090/facts_backend-2.6/rest/corporates/list/table";
const parseLogicURL = url.parse(logicURL, true);
const parseYoutubeURL = url.parse(youtubeURL, true);

console.log(parseLogicURL.host);
console.log(parseYoutubeURL.host);
console.log(parseLogicURL.hostname);
console.log(parseYoutubeURL.hostname);
console.log("--------------------4");
console.log(parseLogicURL.path);
console.log(parseYoutubeURL.path);
console.log(parseLogicURL.pathname);
console.log(parseYoutubeURL.pathname);
console.log("--------------------5");
console.log(parseLogicURL.query);
console.log(parseYoutubeURL.query);
console.log(parseYoutubeURL.query.v);
console.log("--------------------6");
//寫檔案
const fs = require("fs");

// fs.writeFile("try.txt", "Today is a good day.", (e) =>{
//     if(e) throw e;
//     console.log("File has been written.");
// })

console.log("--------------------7");
fs.readFile("./try.txt", "utf-8", (e, data) => {
    if (e) throw e;
    console.log(data);
})
console.log("--------------------8");
console.log("--------------------9");

