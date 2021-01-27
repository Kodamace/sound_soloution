var express = require("express");
var router = express.Router();
var bent = require("bent");
var url = require("url");

const getJSON = bent("json");

router.get("/search", async (req, res, next) => {
  var query = "?q=" + req.query["q"];
  let obj = await getJSON("https://api.deezer.com/search" + query);
  res.send(obj);
});

router.get("/artist:id", async (req, res, next) => {
  // console.log(req);
  var id = req.params.id;
  let obj = await getJSON("https://api.deezer.com/artist/" + id);
  res.send(obj);
});

router.get("/top5tracks:id", async (req, res, next) => {
  // console.log(req);
  var id = req.params.id;
  let obj = await getJSON(
    "https://api.deezer.com/artist/" + id + "/top?limit=5"
  );
  res.send(obj);
});

module.exports = router;
