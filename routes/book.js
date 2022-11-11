const bookController = require("../controller/bookController");

const router = require("express").Router();

// ADD Author
router.post("/",bookController.addBooks);
router.post("/",bookController.getAllBook);
module.exports = router;