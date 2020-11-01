//requiring the mongoose package
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const LiftingSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    type: String,
    weight: {
        type: Number,
    },
    sets: Number,
    reps: Number,
    restInterval: Number
});

const Lifting = mongoose.Schema("Lifting", LiftingSchema) 

module.exports = Lifting;