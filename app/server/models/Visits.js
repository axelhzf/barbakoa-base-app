var db = require("barbakoa").db;

export default db.define("Visits", {
  agent: db.types.STRING(500)
});