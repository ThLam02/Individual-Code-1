const bookController = require("../controller/bookController");

const router = require("express").Router();

// ADD Book
router.post("/",bookController.addBooks);
// GET Book
router.get("/",bookController.getAllBook);
module.exports = router;