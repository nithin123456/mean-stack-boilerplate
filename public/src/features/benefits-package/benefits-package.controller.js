(function (angular) {
    'use strict';

    angular
        .module('app.benefitsPackage')
        .controller('BenefitsPackageController', BenefitsPackageController);

    // @ngInject
    function BenefitsPackageController($window) {
        var vm = this;
        var subject = 'Egen Solutions/Insight Global benefits';
        var body = 'Thank you for taking the time to speak  with us. Please find General information about Egen Solutions and their H1 transfer process,' +
            ' along with Healthcare Benefits attached. If you have any questions regarding this, please contact Trevor, who’s information can be found below.' +
            'Trevor Benson- Sales/Partnerships' +
            'trevor.benson@egeni.com (815) 762-8659' +
            'www.egen.solutions  Naperville- IL';

        vm.send = send;

        function send() {
            $window.location.href =
                'mailto:' + vm.candidateEmail +
                '?subject=' + subject +
                '&body=' + (vm.message ? vm.message : body);
        }

    }
}(angular));