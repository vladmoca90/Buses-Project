﻿function routeSetup($routeProvider) {
    $routeProvider
    .when("/buses", 
        {
            templateUrl: "scripts/templates/buses.html",
            controller: "busesController"
        }
    )
    .when("/bus",
        {
            templateUrl: "scripts/templates/bus.html",
            controller: "busController"
        }
    )
    .when("/stop",
        {
            templateUrl: "scripts/templates/stop.html",
            controller: "stopController"
        }
    )
    .when("/error", {
        templateUrl: "scripts/templates/error.html",
        controller: "errorController"
    })
    .otherwise({
        redirectTo: "/error"
    })
}

routeSetup.$inject = [
    "$routeProvider"
];