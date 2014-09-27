'use strict';

/**
 * @ngdoc function
 * @name lemieripetizioniApp.controller:DettripetizioniCtrl
 * @description
 * # DettripetizioniCtrl
 * Controller of the lemieripetizioniApp
 */

/* When defining a module with no module dependencies, the array of dependencies should be defined and empty. Altrimenti non trova il modulo! */
angular.module('leMieRipetizioniApp.controllers', [])
.controller('DettRipetizioniCtrl', function ($scope, $routeParams, $location, services) {
    $scope.id_ripetizione = $routeParams.id;
    $scope.prenotaRipetizione = function() {

        //viene lanciato quando faccio submit di prenota ripetizione
        //forzo come utente per prenotare la ripetizione l'utente con id=2
        services.getFromRESTServer("id_rip="+$scope.id_ripetizione+"&my_id=2","prenotazione").
        success(function (data) {
            alert("Prenotazione effettuata correttamente!");
            $location.path("/");
        });
    }
});
