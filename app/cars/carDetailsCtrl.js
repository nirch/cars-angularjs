app.controller("carDetailsCtrl", function ($scope, $routeParams, carService, activeUserService, $location) {

    // This is an authotization check. If the user is not logged going back to the home screen
    if (!activeUserService.isLoggedIn()) {
        $location.path("/");
        return;
    }

    var indexToDisplay = parseInt($routeParams.index);

    carService.load(activeUserService.getUser()).then(function () {
        $scope.car = carService.cars[indexToDisplay];
    })

})