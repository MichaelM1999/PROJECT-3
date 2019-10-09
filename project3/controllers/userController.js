const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        //req will have two values


        db.User
          .find(req.username)
          .then(dbModel => 
            //match username's password here...
            //use if statement
            res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
       //make a statement to check if user exists already.
        db.User
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }
}

