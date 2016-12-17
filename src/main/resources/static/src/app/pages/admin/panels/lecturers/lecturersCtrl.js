(function () {
    'use strict';

    angular
        .module('scheduler.pages.admin')
        .controller('lecturersCtrl', lecturersCtrl);

    lecturersCtrl.$inject = ['$scope', '$state', '$http', '$base64', '$uibModal', 'account'];

    /** @ngInject */
    function lecturersCtrl(scope, state, http, base64, uibModal, account) {
        var vm = this;

        vm.lecturers = [];

        getLecturers();
        vm.addLecturerDialog = addLecturerDialog;
        vm.editLecturerDialog = editLecturerDialog;
        vm.deleteLecturerDialog = deleteLecturerDialog;

        function getLecturers() {
            http({
                method: 'GET', url: '/api/lecturers'
            }).success(function (data) {
                vm.lecturers = data;
            }).error(function () {
                toaster.error({body: 'Server temporary unavailable'});
            });
        }

        function addLecturerDialog() {
            var modalInstance = uibModal.open({
                animation: true,
                templateUrl: 'src/app/pages/admin/panels/lecturers/addLecturer/addLecturer.html',
                controller: 'addLecturerCtrl as vm',
            });

            modalInstance.result.then(function (lecturer) {
                vm.lecturers.push(lecturer);
            });
        }

        function editLecturerDialog(index) {
            var modalInstance = uibModal.open({
                animation: true,
                templateUrl: 'src/app/pages/admin/panels/lecturers/editLecturer/editLecturer.html',
                controller: 'editLecturerCtrl as vm',
                resolve: {
                    lecturer: function () {
                        return vm.lecturers[index];
                    }
                }
            });

            modalInstance.result.then(function (lecturer) {
                vm.lecturers.splice(index, 1);
                vm.lecturers.push(lecturer);
            });
        }

        function deleteLecturerDialog(index) {
            var modalInstance = uibModal.open({
                animation: true,
                templateUrl: 'src/app/pages/admin/panels/lecturers/deleteLecturer/deleteLecturer.html',
                controller: 'deleteLecturerCtrl as vm',
                resolve: {
                    lecturerId: function () {
                        return vm.lecturers[index].id;
                    }
                }
            });

            modalInstance.result.then(function () {
                vm.lecturers.splice(index, 1);
            });
        }
    }

})();

