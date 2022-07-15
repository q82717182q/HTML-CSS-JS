const express = require("express");
const app = express();
const ejs = require("ejs");
const mongoose = require("mongoose");
const fs = require("fs");

//connect to mongoDB L413,test是ＤＢ名稱，所以用自己的，與到可能成功可能失敗的情況都要有.then .catch 
mongoose
    .connect("mongodb://localhost:27017/exampleDB", {
        //學習時沒這一版本
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("Connected to MongoDB.");
    }).catch((err) => {
        console.log("Connection Failed.");
        console.log(err);
    });

//L414 define a schema //419 validator
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,//表示為必填
        maxlength: [15, "Name is too long."],
    },
    age: {
        type: Number,
        required: true,
        default: 18
    },
    major: {
        type: String,
        //420，這樣輸入字串只能是這四個
        enum: ["Chem", "Electrical Engineering", "Computer Science", "Law"],
        default: "undecided",


    },
    scholarship:{
        merit: {
            type: Number,
            default: 0,
        },
        other: {
            type: Number,
            default: 0,
        },
    },
});

//L423. create an instance method
studentSchema.methods.totalScholarShip = function() {
    return this.scholarship.merit + this.scholarship.other;
}

//L426. create static method
studentSchema.statics.setOtherToZero = function(){
    return this.updateMany({}, {"scholarship.other": 0});
};

//L427 define middleware 
studentSchema.pre("save", async function(){
    fs.writeFile("record.txt", "One data is tring to be saved", e => {
        if(e) throw e;
    });
});
studentSchema.post("save", async function(){
    fs.writeFile("record.txt", "One data has been saved", (e) => {
        if(e) throw e;
    })
});

//create a model for students
const Student = mongoose.model("Student", studentSchema);//第一個字要大寫，而且要單數，mongoose會自動幫你轉換成負數

//427
const newStudent = new Student({
        name: "Zach Peter",    //註解掉來測試寫log錯誤功能
        age: 20, 
        major: "Chem",
        scholarship: { 
            merit: "0",
            other: "0"
        },
    });
newStudent.save()
    .then(() => {
        console.log("saved");
    })
    .catch((e) => {
        console.log("not saved.");
        console.log(e);
        fs.writeFile("record.txt", "Data is not save", (e) => {
            if(e) throw e;
        })
    })

//L426
// Student.setOtherToZero()
//     .then((msg) => {
//         console.log("success");
//         console.log(msg);
//     })
//     .catch((e) => {
//         console.log("error");
//         console.log(e);
//     });

//L423
// Student
//     .findOne({name: "Jack"})//如果是find空物件就會回傳該物件的資料
//     .then((data) => {
//         console.log(data);//沒找到就算了所以不用catch
//         console.log(data.totalScholarShip());
//     })
//     .catch((e) => {
//         console.log(e);
//         console.log("error");
//     });

//L419
// const newStudent = new Student({
//     name: "dujftyujhuhuhoefhawoeifjoiawjefo",
//     age: 25, 
//     major: "Law",
//     scholarship: { 
//         merit: "2500",
//         other: "1300"
//     },
// });
// newStudent.save().then(() =>{
//     console.log("Data has been saved");
// })
// .catch((e) => {
//     console.log("save failed");
//     console.log(e);
// });


//L418



//L417 delete

//L415 find objects in students
// Student
//     .find({})//如果是find空物件就會回傳該物件的資料
//     .then((data) => {
//         console.log(data);//沒找到就算了所以不用catch
//     });
// L415 findOne
// Student
//     .findOne({name: "Jack"})
//     .then((data) => {
//         console.log(data);
//     });

//L416 update
// Student
//     .updateOne({ name: "Jack"}, {age: 30})
//     .then((msg) => {
//         console.log(msg);
//     });



// // L414create an object 
// const Jon = new Student({
//     name: "Jon Benson",
//     age: 25, 
//     major: "EE",
//     scholarship: { 
//         merit: 2500,
//         other: 1300
//     },
// });
// // save Jon to DB
// Jon
//     .save() //跟insertOne效果一樣
//     .then(() => {
//         console.log("Jon has been save into DB");
//     })
//     .catch((e) => {
//         console.log("Save Failed");
//         console.log(e);
//     })

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("s31index.ejs");
});


app.listen(3000, () => {
    console.log("Server is running on 3000.section31");
});