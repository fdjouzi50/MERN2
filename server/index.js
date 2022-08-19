const express = require("express");
const app = express();
const mongoose = require("mongoose");
const CompteModel = require('./models/Compte.js');

mongoose.connect('mongodb://localhost:27017/école');

app.get("/getCompte", (req, res) => {
     CompteModel.find({}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
     });
});

app.listen(3001, () => {
    console.log("Hello");
});