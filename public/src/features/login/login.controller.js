(function (angular, _) {
    'use strict';

    angular
        .module('app.login')
        .controller('loginController', loginController);

    // @ngInject
    function loginController($location, utilityService, $http) {
        var vm = this;

        vm.utilityService = utilityService;
        vm.userMessageDisplay = false;
        vm.userMessage = '';
        vm.loginUser = loginUser;
        vm.userEmail = 'trevor.benson@egeni.io';

        vm.validateUser = validateUser;
        vm.hideUserMessage = hideUserMessage;

        function loginUser() {
            if (vm.utilityService.emailValidator(vm.emailAdd)) {
                if (vm.password && vm.password.length > 6) {
                    loginApi({
                        username: vm.emailAdd,
                        password: vm.password
                    });
                    $location.path('/user-dashboard');
                } else {
                    vm.userMessage = 'Password should be greater than 6 characters';
                    vm.userMessageDisplay = true;
                }
            } else {
                vm.userMessage = 'Bad Email Address';
                vm.userMessageDisplay = true;
            }
        }

        function hideUserMessage() {
            vm.userMessageDisplay = false;
        }

        function loginApi(user) {
            $http.post('/login', user).then(function (res) {
                $location.path('/user-dashboard');
            }, function (res) {
                vm.userMessage = 'Email Address and Password Do not Match';
                vm.userMessageDisplay = true;
            })
        }

        function validateUser() {
            $location.path('/admin/offers');
        }
    }
}(angular, _));