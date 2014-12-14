var Sequelize = require("barbakoa").Sequelize;
var db = require("barbakoa").db;

module.exports = db.define("FakeUser", {
  name: db.types.STRING,
  surname: db.types.STRING
});