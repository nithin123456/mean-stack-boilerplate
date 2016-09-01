(function (angular) {
    'use strict';

    angular
        .module('app', [

            // Core 3rd party modules:
            'ngRoute',
            'ui.grid',
            'ui.grid.resizeColumns',

            // local modules
            'app.login',
            'app.userDashboard',
            'app.qualifyCandidate',
            'app.rateCalculator',
            'app.submitOffer',
            'app.benefitsPackage',
            'app.offers',
            'app.view2'
        ])
        .config(config);

    // @ngInject
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('app');

        $routeProvider.otherwise({ redirectTo: '/login' });
    }
}(angular));