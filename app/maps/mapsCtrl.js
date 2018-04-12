app.controller('mapsCtrl', function($scope, carService, $sce) {
    var mapSearch = "TelAviv"
    $scope.mapURL = $sce.trustAsResourceUrl("https://www.google.com/maps/embed/v1/search?key=AIzaSyBSil-hbUge7NwSpdgLL6zHWNgJfQzlHcs&q=" + mapSearch);
    
});