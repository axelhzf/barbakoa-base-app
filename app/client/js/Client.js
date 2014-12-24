var app = angular.module("app", ["ngRoute"]);

app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "templates/template1.html",
      controller: "Template1Controller as ctrl"
    })
    .when("/2", {
      templateUrl: "templates/template2.html"
    })
});

class Template1Controller {

  constructor(commonService) {
    this.commonService = commonService;
  }

  sayHelloWorld() {
    console.log("hello");
    this.commonService.sayWorld();
  }
}
app.controller("Template1Controller", Template1Controller);

class CommonService {
  sayWorld() {
    console.log("world");
  }
}
app.service("commonService", CommonService);