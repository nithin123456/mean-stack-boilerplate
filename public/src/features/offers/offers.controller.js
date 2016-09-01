(function (angular, _) {
    'use strict';

    angular
        .module('app.offers')
        .controller('OffersController', OffersController);

    // @ngInject
    function OffersController($http) {
        var vm = this;
        vm.offersData = [];

        vm.gridOptions = {
            rowHeight: 35,
            enableSorting: true,
            enableColumnMenus: false,
            columnDefs: [
                {
                    displayName: 'Candidate Name',
                    field: 'name'
                },
                {
                    displayName: 'Client',
                    field: 'clientName'
                },
                {
                    displayName: 'Rate',
                    field: 'payRate'
                },
                {
                    displayName: 'Bill Rate',
                    field: 'billRate'
                },
                {
                    displayName: 'Start Date',
                    field: 'startDate'
                },
                {
                    displayName: 'Min 6-Month',
                    field: 'isSixMonthsOrMore',
                    cellTemplate: 'cell-templates/offers-min-6-months.html'
                }
            ],
            data: vm.offersData
        };
        vm.getAllCandidates = getAllCandidates;
        vm.getAllCandidates();

        function getAllCandidates () {
            $http.get('/candidate/all').then(function (response) {
                vm.gridOptions.data = response.data.data;
            });
        }
    }
}(angular, _));