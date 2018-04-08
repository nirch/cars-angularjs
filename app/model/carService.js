app.factory('carService', function ($log, $http, $q) {

    var cars = [];
    var wasEverLoaded = false;

    // Car Constructor
    function Car(plainCar) {
        this.brand = plainCar.brand;
        this.model = plainCar.model;
        this.year = plainCar.year;
        this.km = plainCar.km;
        this.testDate = new Date(plainCar.testDate);
        this.kmPerYear = function () {
            return Math.round(this.km / (new Date().getFullYear() - this.year));
        }
    }

    function load(user) {
        var async = $q.defer();

        // Checking if the cars was ever loaded
        if (wasEverLoaded) {
            // Immediatly resolving the promise since cars is already available
            async.resolve();
        } else {
            // Loading the data from JSON
            $http.get(user.data).then(function (response) {
                // on success
                //cars = [];
                cars.splice(0, cars.length)
                $log.debug("CARAPP: " + JSON.stringify(response));
                for (var i = 0; i < response.data.length; i++) {
                    cars.push(new Car(response.data[i]));
                }
                wasEverLoaded = true;
                async.resolve();

            }, function (response) {
                // on failure
                $log.error("CARAPP: " + JSON.stringify(response));
                async.reject();
            });
        }

        return async.promise;
    }
    return {
        cars: cars,
        load: load
    }

})