var barbakoa = require("barbakoa");
var router = barbakoa.router;

var app = new barbakoa();


var Visits = require("./models/Visits");

router.get("/", function* () {
  var agent = this.req.headers['user-agent'] || '';
  yield Visits.create({agent: agent});
  var visits = yield Visits.findAll();
  yield this.render("index", {visits: visits});
});


app.start();
