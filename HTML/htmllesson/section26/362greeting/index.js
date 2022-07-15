//當此資料夾的index，名字一定要用index.js
let selfMadeModules01 = require("./362SelfMadeModules01");
let selfMadeModules02 = require("./362SelfMadeModules02");

exports.morning = selfMadeModules01.morning;
exports.sayHi = selfMadeModules01.sayHi;
exports.night = selfMadeModules02.night;