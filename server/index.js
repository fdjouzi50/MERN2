const express = require("express");
const app = express();
const mongoose = require("mongoose");
const CompteModel = require('./models/Compte.js');
const EtudiantModel = require('./models/Etudiant.js');
const ModuleModel = require('./models/Module.js');
const NoteModel = require('./models/Note.js');
const SpécialitéModel = require('./models/Spécialité.js');

const cors = require('cors');

app.use(express.json());
app.use(cors());

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

app.get("/getEtudiant", (req, res) => {
    EtudiantModel.find({}, (err, result) => {
       if (err) {
           res.json(err);
       } else {
           res.json(result);
       }
    });
});

app.get("/getModule", (req, res) => {
    ModuleModel.find({}, (err, result) => {
       if (err) {
           res.json(err);
       } else {
           res.json(result);
       }
    });
});

app.get("/getNote", (req, res) => {
    NoteModel.find({}, (err, result) => {
       if (err) {
           res.json(err);
       } else {
           res.json(result);
       }
    });
});

app.get("/getSpecialite", (req, res) => {
    SpécialitéModel.find({}, (err, result) => {
       if (err) {
           res.json(err);
       } else {
           res.json(result);
       }
    });
});



app.post("/createCompte", async (req, res) => {
    const compte = req.body
    const newCompte = new CompteModel(compte);
    await newCompte.save();
    res.json(compte)

});





app.listen(3001, () => {
    console.log("Works");
});