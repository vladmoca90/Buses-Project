// this is used by the error view
function errorController($scope) {
    $scope.message = "An error has occurred";
}

errorController.$inject = ["$scope"];