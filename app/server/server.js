var barbakoa = require("barbakoa");
var router = barbakoa.router;

var app = new barbakoa();


var Visits = require("./models/Visits");

router.get("/hello", function* () {
  var agent = this.req.headers['user-agent'] || '';
  yield Visits.create({agent: agent});
  var total = yield Visits.count();
  this.body = {total: total};
});


app.start();
