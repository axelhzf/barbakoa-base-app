var db = require("barbakoa").db;

module.exports = db.define("Visits", {
  agent: db.types.STRING(500)
});