(function (angular) {
    'use strict';

    angular
        .module('app.defaultContainer')
        .controller('DefaultContainerController', DefaultContainerController);

    function DefaultContainerController($window) {
        var vm = this;

        vm.email = $window.localStorage.getItem('emailAddress');
    }

}(angular));