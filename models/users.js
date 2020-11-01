//requiring mongoose package
const mongoose = require("mongoose");
//creating a shortcut for the schema method in the mongoose package
const Schema = mongoose.Schema;
//defining the user model 
const UserSchema = new Schema({
    email: {
        type:String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    workout: [
        {
            type: Schema.Types.ObjectId,
            ref: "workout"
        }
    ],
    cardio: [
        {
            type:Schema.Types.ObjectId,
            ref: "cardio"
        }
    ]
})
//creating the user model with the userschema
const User = mongoose.model("User", UserSchema);
//exporting the user model
module.exports = User;