const authorController = require("../controller/authorController");

const router = require("express").Router();

// ADD Author
router.post("/",authorController.addAuthor);
router.get("/",authorController.getAuthor); 

module.exports = router;