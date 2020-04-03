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

router.get("/post/:post_id?", async (req, res) => {
  const postId = req.params.post_id;
  const post = await DataBase.getById(postId);
  res.json(post).status(200);
});

router.post("/post/comment", async (req, res) => {
  const { title, id, content } = req.body;
  console.log("Router post data recieved is: ", req.body);
  const response = await DataBase.addComment(title, id, content);
  console.log(response);
  return response;
});

module.exports = router;
