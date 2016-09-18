function busesController($scope, $http, $location, busesService, translationService) {
    $scope.allBusesInfo = {
        buses: busesService.getBuses(),
        translations: translationService.getTranslations()
    }

    $scope.goToBusOverview = function (bus) {
        selectedBus = bus;
        
        $location.path("/bus");
    }

    $scope.title = $scope.allBusesInfo.translations.headin;
}

busesController.$inject = ["$scope", "$http", "$location", "busesService", "translationService"];