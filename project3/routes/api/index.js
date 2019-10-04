const router = require("express").Router();
const bookRoutes = require("./user");

// Book routes
router.use("/user", bookRoutes);

module.exports = router;