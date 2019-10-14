const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/username"
router.route("/")
  .get(userController.findAll)
  .post(userController.create);

module.exports = router;
