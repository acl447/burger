let orm = require("../config/orm");

let burger = {

    all: function (cb) {

        orm.selectAll("burgers", function (res) {


            cb(res);
        })
    },

    insert: function (cb) {

        orm.insertOne("burgers", cols, vals, function (res) {

            cb(res);

        })
    },

    update: function (cb) {

        orm.updateOne("burgers", objColVals, condition, function (res) {

            cb(res);

        })
    }



};








module.exports = burger;