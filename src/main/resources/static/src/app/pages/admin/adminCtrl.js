(function () {
    'use strict';

    angular
        .module('scheduler.pages.admin')
        .controller('adminCtrl', adminCtrl);

    adminCtrl.$inject = ['$state', '$cookies'];

    /** @ngInject */
    function adminCtrl(state, cookies) {
        var vm = this;

        vm.items = [
            'The first choice!',
            'And another choice for you.',
            'but wait! A third!'
        ];

        vm.signout = signout;

        function signout() {
            cookies.remove("username");
            cookies.remove("password");
            state.go('pages.dashboard');
        }


    }

})();

