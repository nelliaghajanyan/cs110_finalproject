(function () {
    'use strict';

    angular
        .module('scheduler.pages.admin')
        .controller('sectionsCtrl', sectionsCtrl);

    sectionsCtrl.$inject = ['$state', '$http', '$base64', '$uibModal', 'toaster', '$rootScope'];

    /** @ngInject */
    function sectionsCtrl(state, http, base64, uibModal, toaster, rootScope) {
        var vm = this;

        vm.sections = [];

        getSections();
        vm.addSectionDialog = addSectionDialog;
        vm.editSectionDialog = editSectionDialog;
        vm.deleteSectionDialog = deleteSectionDialog;

        function getSections() {
            http({
                method: 'GET', url: '/api/sections'
            }).success(function (data) {
                vm.sections = data;

            }).error(function () {
                toaster.error({body: 'Server temporary unavailable'});
            });
        }

        function addSectionDialog() {
            var modalInstance = uibModal.open({
                animation: true,
                templateUrl: 'src/app/pages/admin/panels/sections/addSection/addSection.html',
                controller: 'addSectionCtrl as vm'
            });

            modalInstance.result.then(function (section) {
                vm.sections.push(section);
            });
        }

        function editSectionDialog(index) {
            var modalInstance = uibModal.open({
                animation: true,
                templateUrl: 'src/app/pages/admin/panels/sections/editSection/editSection.html',
                controller: 'editSectionCtrl as vm',
                resolve: {
                    section: function () {
                        return vm.sections[index];
                    }
                }
            });

            modalInstance.result.then(function (section) {
                vm.sections.splice(index, 1);
                vm.sections.push(section);
            });
        }

        function deleteSectionDialog(index) {
            var modalInstance = uibModal.open({
                animation: true,
                templateUrl: 'src/app/pages/admin/panels/sections/deleteSection/deleteSection.html',
                controller: 'deleteSectionCtrl as vm',
                resolve: {
                    sectionId: function () {
                        return vm.sections[index].id;
                    }
                }
            });

            modalInstance.result.then(function () {
                vm.sections.splice(index, 1);
            });
        }
    }

})();

