const db = require("../models");

module.exports = {
    create: function(req, res) {
        console.log('HEY', req.body);
         db.Stock
           .exists({stock_name: req.body.stock}).then(data => {
               console.log(data)
             if (data === true) {
                 res.send({err: "you're already following"})
                 console.log("already here")
               }
               else {
                 console.log(req.body, 'HERE IT IS ');
                 let stock = {
                   stock_name: req.body.stock,
                   owner: req.body.user
                 }

                 db.Stock.create(stock).then(data => res.send(data))
                 .catch(err => res.status(422).json(err));
                 console.log("stock created");
               }
 
           });
         
       },
    find: function(req, res) {
      console.log('hellooooo', req.body.user);
      db.Stock
        .find({owner: req.body.user}).then(data => {
          res.send(data)
          .catch(err => res.status(422).json(err));
        })
    }
}