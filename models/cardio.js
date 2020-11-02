//requiring the mongoose package
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CardioSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    cardio_type: String,
    distance: Number,
    totalTime: Number,
    pace: Number
});

const Cardio = mongoose.model("Cardio", CardioSchema) 

module.exports = Cardio;