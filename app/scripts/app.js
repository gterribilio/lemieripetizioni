'use strict';

/**
 * @ngdoc overview
 * @name lemieripetizioniApp
 * @description
 * # lemieripetizioniApp
 *
 * Main module of the application.

When defining a module with no module dependencies,
the array of dependencies should be defined and empty.
var myApp = angular.module('myApp', []);
To retrieve a reference to the same module for further configuration, call angular.module without the array argument.
var myApp = angular.module('myApp');
 */

var app = angular
.module('leMieRipetizioniApp', [
    'ngRoute'
]).config(['$routeProvider', '$httpProvider', function($routeProvider,$httpProvider) {
    $routeProvider.
    when('/', {templateUrl: 'views/ricerca_ripetizioni.html', controller: 'RicercaRipetizioniCtrl'}).
    when('/ripetizione/:id', {templateUrl: 'views/dett_ripetizione.html', controller: 'DettRipetizioniCtrl'}).
    otherwise({redirectTo: '/'});
}]);