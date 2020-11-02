//requiring the mongoose package
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LiftingSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    weight: {
        type: Number,
    },
    sets: Number,
    reps: Number,
    restInterval: Number
});

const Lifting = mongoose.model("Lifting", LiftingSchema) 

module.exports = Lifting