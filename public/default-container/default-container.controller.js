(function (angular) {
    'use strict';

    angular
        .module('app.defaultContainer')
        .controller('DefaultContainerController', DefaultContainerController);

    function DefaultContainerController() {
        var vm = this;

        vm.email = 'trevor.benson@egeni.com';
    }

}(angular));