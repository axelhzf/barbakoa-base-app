var barbakoa = require("barbakoa");
var router = barbakoa.router;

var app = new barbakoa();


var Visits = require("./models/Visits");

router.get("/", function* () {
  var agent = this.req.headers['user-agent'] || '';
  yield Visits.create({agent: agent});
  var visits = yield Visits.findAll();

  var assets = barbakoa.assets.getModule("app");

  yield this.render("index", {visits: visits, assets: assets});
});

module.exports = app;

if (require.main === module) {
  app.start();
}
