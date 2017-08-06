var app = angular.module("Chirper", ['ngRoute', 'ngResource', "Chirper.controllers", "Chirper.factories"]);

app.config(["$routeProvider", function($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: 'views/welcome.html',
        controller: "WelcomeController"
    }).when('/chirps', {
        templateUrl: "views/list.html",
        controller: "ListController"
    }).when("/chirps/:id", {
        templateUrl: "views/single_view.html",
        controller: "SingleController"
    }).when('/chirps/:id/update', {
        templateUrl: "views/single_update.html",
        controller: "UpdateController"
    })
}])