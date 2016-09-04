"use strict";

selectedBus = null;
selectedStop = null;

var app = angular.module("myApp", ["ngRoute"]);

app.controller("busesController", busesController).controller("busController", busController).controller("stopController", stopController).controller("dropdownController", dropdownController).controller("errorController", errorController).config(routeSetup);

