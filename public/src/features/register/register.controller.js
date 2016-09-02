(function (angular, _) {
    'use strict';

    angular
        .module('app.register')
        .controller('registerController', registerController);

    // @ngInject
    function registerController($location, $http, utilityService) {
        var vm = this;

        vm.userMessageDisplay = false;
        vm.utilityService = utilityService;
        vm.userMessage = '';
        vm.registerUser = registerUser;
        vm.updateUserExist = updateUserExist;

        function updateUserExist() {
            vm.userMessageDisplay = false;
        }

        function registerUser() {
            if (utilityService.emailValidator(vm.emailAdd)) {
                if (vm.confirmPassword === vm.password) {
                    if (vm.password && vm.password.length > 6) {
                        if (vm.selected) {
                            registerApi({
                                username: vm.emailAdd,
                                password: vm.password,
                                location: vm.selected
                            });
                        } else {
                            vm.userMessage = 'Location not Selected';
                            vm.userMessageDisplay = true;
                        }
                    } else {
                        vm.userMessage = 'Password should be greater than 6 characters';
                        vm.userMessageDisplay = true;
                    }
                } else {
                    vm.userMessage = 'Passwords do not Match';
                    vm.userMessageDisplay = true;
                }
            } else {
                vm.userMessage = 'Bad Email Address';
                vm.userMessageDisplay = true;
            }
        }

        function registerApi(user) {
            $http.post('/register', user).then(function (res) {
                $location.path('/user-dashboard');
                }, function (res) {
                vm.userMessage = 'Email Address already Registered';
                vm.userMessageDisplay = true;
                })
        }
    }
}(angular, _));