(function () {
    'use strict';

    angular
        .module('scheduler.pages.admin')
        .controller('subjectsCtrl', subjectsCtrl);

    subjectsCtrl.$inject = ['$state', '$http', '$base64', '$uibModal', 'toaster', 'account', '$rootScope'];

    /** @ngInject */
    function subjectsCtrl(state, http, base64, uibModal, toaster, account, rootScope) {
        var vm = this;

        vm.subjects = [];

        getSubjects();
        vm.addSubjectDialog = addSubjectDialog;
        vm.editSubjectDialog = editSubjectDialog;
        vm.deleteSubjectDialog = deleteSubjectDialog;


        function getSubjects() {
            http({
                method: 'GET', url: '/api/subjects'
            }).success(function (data) {
                vm.subjects = data;
            }).error(function () {
                toaster.error({body: 'Server temporary unavailable'});
                rootScope.$broadcast('subjects', { subjects: vm.subjects});

            });
        }


        function addSubjectDialog() {
            var modalInstance = uibModal.open({
                animation: true,
                templateUrl: 'src/app/pages/admin/panels/subjects/addSubject/addSubject.html',
                controller: 'addSubjectCtrl as vm'
            });

            modalInstance.result.then(function (subject) {
                vm.subjects.push(subject);
            });
        }

        function editSubjectDialog(index) {
            var modalInstance = uibModal.open({
                animation: true,
                templateUrl: 'src/app/pages/admin/panels/subjects/editSubject/editSubject.html',
                controller: 'editSubjectCtrl as vm',
                resolve: {
                    subject: function () {
                        return vm.subjects[index];
                    }
                }
            });

            modalInstance.result.then(function (subject) {
                vm.subjects.splice(index, 1);
                vm.subjects.push(subject);
            });
        }

        function deleteSubjectDialog(index) {
            var modalInstance = uibModal.open({
                animation: true,
                templateUrl: 'src/app/pages/admin/panels/subjects/deleteSubject/deleteSubject.html',
                controller: 'deleteSubjectCtrl as vm',
                resolve: {
                    subjectId: function () {
                        return vm.subjects[index].id;;
                    }
                }
            });

            modalInstance.result.then(function () {
                vm.subjects.splice(index, 1);
            });
        }


    }

})();

