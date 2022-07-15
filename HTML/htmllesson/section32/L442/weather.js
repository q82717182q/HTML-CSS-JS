const express = require("express");
const app = express();
const ejs = require("ejs");
const https = require("https");
const fetch = require("node-fetch"); //3.x就不這樣用了


 
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

    const response = await fetch('https://api.github.com/users/github');
    const data = await response.json();
    
    console.log(data);                                                              

});

app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});