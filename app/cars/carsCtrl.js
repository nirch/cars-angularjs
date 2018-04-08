
app.controller('carsCtrl', function($scope, activeUserService, $location, carService) {

    // This is an authotization check. If the user is not logged going back to the home screen
    if (!activeUserService.isLoggedIn()) {
        $location.path("/");
        return;
    }

    carService.load(activeUserService.getUser()).then(function() {
        $scope.cars = carService.cars;
    });

    

 
})