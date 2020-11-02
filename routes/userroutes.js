const router = require("express").Router();
const mongoose = require("mongoose");

const db = require("./models");

//retrieving users
router.get("/user", (req,res) => {
    db.User.find({})
}).then(dbUser => {
    res.json(dbUser)
}).catch(err => {
    res.json(err)}
)

//creating user
router.post("/user", ({body}, res) => {
    db.User.create({body})
    .then(dbUser => {
        console.log(dbUser)
    }).catch(({message}) => {
        console.log(message)
    });
})

//update user
router.put("/user", (req, res) => {
    db.User.update(
        {
            _id: mongojs.ObjectId(req.params.id)
          }, 
          {$set: {
            password: req.body.password
          }
        }, (err,data) => {
            if(err) {
              console.log(err)
            } else {
              console.log("updated")
              res.json(data)
            }
          }
    )
})

