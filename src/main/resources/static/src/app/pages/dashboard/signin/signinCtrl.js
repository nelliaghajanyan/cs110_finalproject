(function () {
    'use strict';

    angular
        .module('scheduler.pages.dashboard')
        .controller('signinCtrl', signinCtrl);

    signinCtrl.$inject = ['$state', '$http', '$base64', '$uibModalInstance', 'toaster', 'account'];

    /** @ngInject */
    function signinCtrl(state, http, base64, uibModalInstance, toaster, account) {
        var vm = this;
        var username = account.getUsername();
        var password = account.getPassword();

        if ((username != "" && username != undefined) &&
            (password != "" && password != undefined )) {
            state.go('pages.dashboard');
        }

        vm.signin = signin;

        function signin() {
            if ((vm.username != "" && vm.username != undefined) && (vm.password != "" && vm.password != undefined )) {
                http.defaults.headers.common['Authorization'] = 'Basic ' + base64.encode(vm.username + ':' + vm.password);
                http({
                    method: 'POST', url: '/api/login'
                }).success(function (data) {
                    if (data) {
                        account.setCookies(vm.username, vm.password);
                        state.go('pages.admin');
                        uibModalInstance.dismiss('cancel');
                    } else {
                        state.go('pages.dashboard');
                    }
                }).error(function () {
                    toaster.error({title:'Error', body: 'Username or password is incorrect'});
                });
            } else {
              state.go('pages.dashboard');
            }
        }
    }

})();

