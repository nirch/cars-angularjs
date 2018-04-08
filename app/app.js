
var app = angular.module('carApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl : "app/home/home.html"
    })
    .when("/login", {
      templateUrl : "app/login/login.html"
    })
});

// TODO: Delete this later
app.controller("testCtrl", function($scope, activeUserService) {
  var user = new activeUserService.User( {
    "email": "nir@nir.com",
    "password": "123123",
    "fname": "Nir",
    "lname": "Channes"
})
  //$scope.bla = JSON.stringify(user);
})