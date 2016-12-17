(function () {
    'use strict';

    angular
        .module('scheduler.pages.dashboard')
        .controller('dashboardCtrl', dashboardCtrl);

    dashboardCtrl.$inject = ['$state', '$http', '$base64', '$uibModal', 'toaster'];

    /** @ngInject */
    function dashboardCtrl(state, http, base64, uibModal, toaster) {
        var vm = this;

        vm.itemsByPage = 15;
        vm.rooms = [];

        getRooms();
        vm.openSignInDialog = openSignInDialog;

        function openSignInDialog(size) {
            uibModal.open({
                animation: true,
                templateUrl: 'src/app/pages/dashboard/signin/signin.html',
                controller: 'signinCtrl as vm',
                size: size
            });
        }

        function getRooms() {
            http({
                method: 'GET', url: '/api/rooms'
            }).success(function (data) {
                vm.rooms = data;
            }).error(function () {
                toaster.error({ title: 'Error', body: ''})
            });
        }
    }

})();

