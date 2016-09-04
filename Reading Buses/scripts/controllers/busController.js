// need to use $location to return to buses
function busController($scope, $location) {
    $scope.bus = selectedBus;

    $scope.showStopOverview = function (stop) {
        selectedStop = stop;

        $location.path("/stop");
    }

    $scope.goBack = function (back) {
        $location.path("/buses");
    }
}

busController.$inject = ["$scope", "$location"];