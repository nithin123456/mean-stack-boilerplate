(function (angular) {
    'use strict';

    angular
        .module('app.view2')
        .controller('View2Ctrl', View2Ctrl);

    // @ngInject
    function View2Ctrl(){
        var vm = this;

        vm.controller = 'controller2';
    }
}(angular));