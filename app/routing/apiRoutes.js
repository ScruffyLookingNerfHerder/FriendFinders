var friendsdata = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res){
    res.json(friendsdata);

  });
  app.post("/api/friends", function(req, res){
    friendsdata.push(req.body);
    res.json(true);
  });


}
