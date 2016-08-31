(function (angular) {
    'use strict';

    angular
        .module('app.view2', [

            // Core 3rd party modules:
            'ngRoute'
        ])
        .config(config);

    // @ngInject
    function config($routeProvider) {
        $routeProvider.when('/view2', {
            templateUrl: 'view2/view2.html',
            controller: 'View2Ctrl',
            controllerAs: 'vm'
        });
    }
}(angular));