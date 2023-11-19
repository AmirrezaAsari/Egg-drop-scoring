const express = require("express");
const { ErrorHandler, NotFoundError } = require("./util/errorHandler");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));


app.get("/", (req, res, next) =>{
    res.status(200).json({
        message: "Egg-save Calculator microservice"
    });
})


app.post("/data" , (req, res, next) =>{
    const {
        userName,
        userWeight,
        distanceScore,
        userTime,
        creative,
        eggOut,
        minWeight,
        maxWeight,
        minTime,
        maxTime,
        eif
    } = req.body;
    

    let weight = parseInt(200*((maxWeight - userWeight) / (maxWeight - minWeight)));
    let time = parseInt(100*((maxTime - userTime) / (maxTime - minTime)));
    let totalScore = (parseInt((weight + time + parseInt(distanceScore)) * parseInt(eif)) + parseInt(creative) + parseInt(eggOut));
    

    res.json({
        username: userName,
        userTotalScore: totalScore
    });

});

app.use(NotFoundError);
app.use(ErrorHandler);


app.listen(3000, (req,res) => {
    console.log("Server run on port 3000: http://localhost:3000");
});