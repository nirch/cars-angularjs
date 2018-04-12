
app.controller('reportsCtrl', function($scope, carService) {
    $scope.test = "blabla";

    carService.load().then(function() {
        var newCars = 0;
        var oldCars = 0;

        for (var i = 0; i < carService.cars.length; i++) {
            if (carService.cars[i].year > 2010) {
                ++newCars;
            } else {
                ++oldCars;
            }
        }

        $scope.newOldChart = {};
        $scope.newOldChart.type = "PieChart";
        $scope.newOldChart.option = {
            title: "New vs. Old Cars"
        }

        $scope.newOldChart.data = {
            cols: [
                {
                    id: "1",
                    label: "New/Old",
                    type: "string"
                },
                {
                    id: "2",
                    label: "Cars Number",
                    type: "number"
                }
            ],
            rows: [
                {
                    c: [
                        {
                            v: "New Cars"
                        },
                        {
                            v: newCars
                        }
                    ]
                },
                {
                c: [
                    {
                        v: "Old Cars"
                    },
                    {
                        v: oldCars
                    }
                ]
                }
            ]
        }
    });
})