(function (angular) {
    'use strict';

    angular
        .module('app.submitOffer')
        .controller('SubmitOfferController', SubmitOfferController);

    // @ngInject
    function SubmitOfferController() {
        var vm = this;
        vm.update = update;

        function update(user){
            console.log(user);
        }

    }
}(angular));