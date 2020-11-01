//requiring the mongoose package
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CardioSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    type: String,
    distance: Number,
    totalTime: Number,
    pace: Number
});

const Cardio = mongoose.Schema("Cardio", CardioSchema) 

module.exports = Cardio;