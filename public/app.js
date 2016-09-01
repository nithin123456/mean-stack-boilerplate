(function (angular) {
    'use strict';

    angular
        .module('app', [

            // Core 3rd party modules:
            'ngRoute',

            // local modules
            'app.login',
            'app.userDashboard',
            'app.qualifyCandidate',
            'app.rateCalculator',
            'app.submitOffer',
            'app.benefitsPackage'
        ])
        .config(config);

    // @ngInject
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('app');

        $routeProvider.otherwise({ redirectTo: '/login' });
    }
}(angular));