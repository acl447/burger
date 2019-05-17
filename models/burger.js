let orm = require("../config/orm");

let burger = {

    all: function(cb) {

        orm.all("burgers")
    }



}








module.exports = burger;