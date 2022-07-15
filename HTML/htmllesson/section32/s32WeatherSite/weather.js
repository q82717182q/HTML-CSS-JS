const express = require("express");
const app = express();
const ejs = require("ejs");
const https = require("https");
const { response } = require("express");
//L440
//api key
const myKey = "17b703f6b16a7a988a4467e1dee46b48";

function ktoC(k){
    return k - 273.15;
}

//middleware
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/:city", (req, res) => {
    // console.log(req.params);
    let {city} = req.params;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myKey}`;

    //get request made by node.js
    https
        .get(url, (response) => {
            console.log("statusCode:", response.statusCode);
            console.log("headers:", response.headers);
            response.on("data", (d) => {
                let dJson = JSON.parse(d); // JSON工具就不用await了
                // console.log(dJson);
                let { temp } = dJson.main;
                let newTemp = ktoC(temp);
                res.render("weather.ejs", {dJson, newTemp}); // 把dJson放到這個頁面
            });
        })
        .on("error", (e) => {
        console.log(e);
        });

});

app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});