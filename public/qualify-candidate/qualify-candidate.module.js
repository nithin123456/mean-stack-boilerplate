(function (angular) {
    'use strict';

    angular
        .module('app.qualifyCandidate', [
            'ngRoute',
            'app.defaultContainer'
        ])
        .config(config);

    // @ngInject
    function config($routeProvider) {
        $routeProvider.when('/qualify-candidate', {
            templateUrl: 'qualify-candidate/qualify-candidate.html',
            controller: 'QualifyCandidateController',
            controllerAs: 'vm'
        });
    }
}(angular));