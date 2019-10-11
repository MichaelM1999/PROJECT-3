const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        //req will have two values


        db.User
          .findOne(req.username)
          .catch(err => res.status(422).json(err));
          //match username's password here...
          //use if statement
          if(dbModel.username === req.username || dbModel.username === req.password){
            (dbModel => res.json(dbModel))
          }
    },
    create: function(req, res) {
       //make a statement to check if user exists already.
        db.User
          .findOne(req.username)
          if (req.username === res.username){
            res.json("someone is already using the username: " + req.username)
          } else{
            create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
          }
      }
}

