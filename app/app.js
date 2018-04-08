
var app = angular.module('carApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl : "app/home/home.html"
    })
    .when("/login", {
      templateUrl : "app/login/login.html",
      controller: 'loginCtrl'
    })
});

// TODO: Delete this later
app.controller("testCtrl", function($scope, activeUserService) {
//   var user = new activeUserService.User( {
//     "email": "nir@nir.com",
//     "password": "123123",
//     "fname": "Nir",
//     "lname": "Channes"
// })
  //$scope.bla = JSON.stringify(user);

  // activeUserService.load().then(function() {
  //   //activeUserService.login("nir@nir.com", "123123");
  //   //$scope.bla = JSON.stringify(activeUserService.getUser());
  //   //$scope.bla = activeUserService.isLoggedIn();
  //   //activeUserService.logout();
  //   //$scope.bla = activeUserService.isLoggedIn();
  // })
  
})