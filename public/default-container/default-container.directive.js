(function (angular) {
    'use strict';

    angular
        .module('app.defaultContainer')
        .directive('defaultContainer', defaultContainer);

    function defaultContainer() {
        return {
            restrict: 'A',
            transclude: true,
            scope: {},
            templateUrl: 'default-container/default-container.html',
            controller: 'DefaultContainerController',
            controllerAs: 'vm'
        }
    }

}(angular));