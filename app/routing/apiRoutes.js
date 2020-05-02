var friends = require("../data/friends.js");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        var scores = req.body.scores.map(item => parseInt(item));

        var diff = [];

        for (var i = 0; i < friends.length; i++) {
            diff.push(checkDiff(friends[i].scores, scores));
        }

        var index = diff.indexOf(Math.min(...diff));

        res.json(friends[index]);

        friends.push({
            "name": req.body.name,
            "photo": req.body.photo,
            "scores": scores
        });
    });

    function checkDiff(arr1, arr2) {
        var totalDiff = 0;
        for (var i = 0; i < 10; i++) {
            totalDiff += Math.abs(arr1[i] - arr2[i]);
        }
        return totalDiff;
    }

};