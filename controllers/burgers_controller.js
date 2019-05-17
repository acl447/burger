let express = require("express");

let burger = require("../models/burger");

let router = express.Router();


router.get("/", function(req, res) {

    burger.all(function(data) {

        let hbsObject = {

            burgers: data
        };

        console.log(hbsObject);

        res.render("index", hbsObject);
    })
});

router.post("/api/burgers", function(req, res) {

    burger.insert(["name"], [req.body.name], function(result) {


    })
})













module.exports = router;