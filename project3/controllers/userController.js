const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        //req will have two values


        db.User
          .findOne(req.username).then(data => {
            if(data.username === req.body.username || dbModel.username === req.body.password){
              (data => res.json(data))
            }
            else {
              res.send({err: 'username and password incorrect'})
            }
          })
          .catch(err => res.status(422).json(err));
          //match username's password here...
          //use if statement
    },
    create: function(req, res) {
       //make a statement to check if user exists already.
       console.log('HEY', req.body);
        db.User
          .exists(req.body).then(data => {
            if (data) {
                res.send({err: 'User already exists!'})
              }
              else {
                db.User.create(req.body).then(data => res.json(data))
                .catch(err => res.status(422).json(err));
              }

          });
        
      }
}

