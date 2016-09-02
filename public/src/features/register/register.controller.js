(function (angular, _) {
    'use strict';

    angular
        .module('app.register')
        .controller('registerController', registerController);

    // @ngInject
    function registerController($location, $http) {
        var vm = this;

        vm.userMessageDisplay = false;
        vm.userMessage = '';
        vm.registerUser = registerUser;
        vm.updateUserExist = updateUserExist;

        function updateUserExist() {
            vm.userMessageDisplay = false;
        }

        function registerUser() {
            if (validateEmail(vm.emailAdd)) {
                if (vm.confirmPassword === vm.password && vm.password && vm.password.length === 3) {
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
                    vm.userMessage = 'Passwords do not Match';
                    vm.userMessageDisplay = true;
                }
            } else {
                vm.userMessage = 'Bad Email Address';
                vm.userMessageDisplay = true;
            }
        }

        function registerApi(user) {
            $http.post('/register',
                user
            ).then(function (res) {
                    console.log('here' + res);
                    $location.go('/user-dashboard');
                }, function (res) {
                    console.log(res);
                })
        }

        function validateEmail(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }

        vm.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
    }
}(angular, _));