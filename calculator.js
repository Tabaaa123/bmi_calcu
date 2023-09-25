// const express = require('express');
// // const app = express();

// // app.get('/', function(req,res){
// //     res.sendFile(__dirname);
// // });
// app.get('/', function (req, res) {
//     res.sendFile(__dirname + "/index.html");
// });
// app.listen(3000, function (){
//     console.log("Server started on port 3000");
// });

// const express = require('express');
// // const bodyParser = require("bodyParser");
// const app = express();
// app.use(express.urlencoded({extended: true}));
// app.get("/", function(req,res){
//     res.sendFile(__dirname + "/index.html");
// });
// app.post("/", function(req,res){
//     // console.log(req.body);
//     // res.send("Posted");
//     let first_num = Number(req.body.first_num);
//     let second_num = Number(req.body.second_num);
//     let result = first_num+second_num;
//     res.send("The sum is "+ result);
// });
// app.listen(3000, function(){
//     console.log("Server started on port 3000");
// });

const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));


app.get("/", function (req, res) {
    res.sendFile(__dirname + "/bmi.html");
});

app.post("/", function (req, res) {
    const weight = Number(req.body.weight);
    const height = Number(req.body.height);
    const bmi = parseFloat(weight / (height * height)) ;
    if (bmi < 15.5){
        res.send("You BMI is " + bmi + "💪 You need to gain more weight! You can do it!");
    } else if (bmi >=35 && bmi <=25.5 ){
        res.send("You BMI is " + bmi + "🤩 Amazing! You're weight is totally normal! Be consistent😊");
    }else if (bmi >=50 && bmi <=75.5 ){
        res.send("You BMI is " + bmi + "💪 OMG! You need to lose your weight. You can do it!");
    }
});

app.listen(3000, function () {
    console.log("Server started on port 3000");
});
