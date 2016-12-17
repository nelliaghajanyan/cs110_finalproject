(function () {
    'use strict';

    angular
        .module('scheduler.pages.admin')
        .controller('editLecturerCtrl', editLecturerCtrl);

    editLecturerCtrl.$inject = ['$state', '$http', '$base64', '$uibModalInstance', 'toaster', 'lecturer'];

    /** @ngInject */
    function editLecturerCtrl(state, http, base64, uibModalInstance, toaster, lecturer) {
        var vm = this;

        getSections();
        getSubjects();
        vm.edit = edit;

        vm.lecturer = lecturer;

        function edit() {
            http({
                method: 'PUT', url: '/api/lecturers/' + lecturer.id,
                headers: {'Authorization': 'Basic ' + base64.encode('admin' + ':' + 'hardpass')},
                data: {
                    name: vm.lecturer.name,
                    ta: vm.lecturer.ta,
                    sectionName: vm.section.name,
                    subjectName: vm.subject.name
                }
            }).success(function (data) {
                uibModalInstance.close(vm.lecturer);
            }).error(function () {
                toaster.error({body: 'Can\'t add Section'});
            });
        }

        function getSections() {
            http({
                method: 'GET', url: '/api/sections'
            }).success(function (data) {
                vm.sections = data;
            }).error(function () {
                toaster.error({body: 'Server temporary unavailable'});
            });
        }

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
    }

})();

