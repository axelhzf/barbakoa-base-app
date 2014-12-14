var barbakoa = require("barbakoa");
var router = barbakoa.router;

var app = new barbakoa();

router.get("/hello", function* () {
  this.body = {"msg": "hello world"};
});

app.start();
