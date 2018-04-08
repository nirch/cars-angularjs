
app.controller('carsCtrl', function ($scope, activeUserService, $location, carService) {

    // This is an authotization check. If the user is not logged going back to the home screen
    if (!activeUserService.isLoggedIn()) {
        $location.path("/");
        return;
    }

    carService.load(activeUserService.getUser()).then(function () {
        $scope.cars = carService.cars;
    });

    // Initializing searchText so it won't be undefined before the user enters text
    $scope.searchText = "";
    $scope.filterCar = function (car) {
        // Case insensitive search in model and brand properties
        if (car.brand.toLowerCase().includes($scope.searchText.toLowerCase()) ||
            car.model.toLowerCase().includes($scope.searchText.toLowerCase())) {
            return true;
        } else {
            return false;
        }
        // return car.brand.includes($scope.searchText) || car.model.includes($scope.searchText)
    }

    // Sorting
    $scope.sortProp = "";
    $scope.changeSort = function (propName) {
        $scope.sortProp = propName;
    }

    // Open car details
    $scope.openCar = function (car) {
        $location.path('/cars/' + $scope.cars.indexOf(car));
    }


})