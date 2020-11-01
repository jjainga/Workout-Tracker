//requiring the mongoose package
const mongoose = require("mongoose");
//requiring moment for nicer dates
const moment = require("moment");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    name: String,
    createdDate: {
        type: Date,
        default: moment().format('ll')
    },
    duration: {
        type: Number
    },
    lifting: [
        {
            type: Schema.Types.ObjectId,
            ref: "lifting"
        }
    ],
    cardio: [
        {
            type:Schema.Types.ObjectId,
            ref: "cardio"
        }
    ]
})