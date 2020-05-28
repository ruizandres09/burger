//Using cat.js from activity 16 as a starting code
// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

//instead of a cat object we will use it for our burger object and instead of "cats" in our mysql we have "burgers"
var burger = {
  all: function (cb) {
    orm.all("burgers", function (res) {
      cb(res);
    });
  },

  // the all method  is pretty much the same as the activity
  // The variables cols and vals are arrays.

  // the create method is different because we take the two arguments "burgername, and devoured"
  //this has burgers(database),(two columns "burgername,devoured"), and two values(burgername, true/false) respectively
  create: function (name, cb) {
    orm.create("burgers", ["burgername", "devoured"], [name, false], cb);
  },
  //this is updating the values inside the database to show it has been devoured.
  update: function (id, cb) {
    var response = `id= ${id}`;
    orm.update("burgers", { devoured: true }, response, cb);
  },
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
