var express = require("express");
var router = express.Router();

const DataBase = require("../models/functions");

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

router.get("/all", async (req, res) => {
  const allPosts = await DataBase.getAll();
  res.json(allPosts).status(200);
});

module.exports = router;
