let express = require("express");

let burger = require("../models/burger");

let router = express.Router();


//Routes
router.get("/", function (req, res) {

    burger.all(function (data) {

        let hbsObject = {

            burgers: data
        };

        console.log(hbsObject);

        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {

    burger.insert(req.body.burger_name, function (result) {

        console.log(result);

        //After adding new burger, refresh page
        res.redirect("/");
    });
});

router.put("/api/burgers/:id", function (req, res) {

    let condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update(
        {
            devoured: req.body.devoured
        },
        condition,
        function (result) {

            if (result.changedRows === 0) {

                //If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );

});


module.exports = router;