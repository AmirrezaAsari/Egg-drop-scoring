const express = require("express");
const {errorHandler, notFoundError} = require("./util/errorHandler");
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
        userDistance,
        userTime,
        creative,
        eggOut,
        minWeight,
        maxWeight,
        minDistance,
        maxDistance,
        minTime,
        maxTime,
        eif
    } = req.body;
    
    console.log(userWeight);
    console.log(userName);
    weight = 200*((maxWeight - userWeight) / (maxWeight - minWeight));
    distance = 200*((maxDistance - userDistance) / (maxDistance - minDistance));
    time = 100*((maxTime - userTime) / (maxTime - minTime));

    console.log(weight + "  " + distance + "    " + time + "    " + eif);

    totalScore = (parseInt((weight + distance + time)) * parseInt(eif)) + parseInt(creative) + parseInt(eggOut);
    console.log(totalScore);
    console.log(eif);
    res.json({
        username: userName,
        userTotalScore: totalScore
    });


});


app.listen(3000, (req,res) => {
    console.log("Server run on port 3000: http://localhost:3000");
});