
app.controller('loginCtrl', function($scope, activeUserService, $log) {

    $scope.invalidCredentails = false;

    $scope.login = function() {
        // TODO: Here you should disable the login button until there is a response from the service

        activeUserService.load().then(function() {
            var successLogin = activeUserService.login($scope.email, $scope.pwd);
            if (successLogin) {

            } else {
                // TODO: Missing hadleing of next try
                $scope.invalidCredentails = true;
            }
        })
    }
});