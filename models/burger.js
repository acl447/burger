let orm = require("../config/orm");

let burger = {

    all: function (cb) {

        orm.selectAll("burgers", function (res) {


            cb(res);
        });
    },

    insert: function (name, cb) {

        orm.insertOne("burgers", ["burger_name", "devoured"], [name, false], cb);
    
    },

    update: function (objColVals, condition, cb) {

        orm.updateOne("burgers", objColVals, condition, cb);

    }



};


module.exports = burger;