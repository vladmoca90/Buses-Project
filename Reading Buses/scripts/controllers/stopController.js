// need to use $location to return to bus
function stopController($scope, $location) {
    $scope.stop = selectedStop;

    $scope.goBack = function (back) {
        $location.path("/bus");
    }

    $scope.title = "Stop Page";
}

stopController.$inject = ["$scope", "$location"];