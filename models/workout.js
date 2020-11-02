//requiring the mongoose package
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    name: {
        type: String,
        required: "Enter a name of the workout"
    },
    createdDate: {
        type: Date,
    },
    lifting: [
        {
            type: Schema.Types.ObjectId,
            ref: "Lifting"
        }
    ],
    cardio: [
        {
            type: Schema.Types.ObjectId,
            ref: "Cardio"
        }
    ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports =  Workout;