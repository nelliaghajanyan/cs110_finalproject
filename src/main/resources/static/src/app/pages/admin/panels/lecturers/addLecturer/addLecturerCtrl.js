(function () {
    'use strict';

    angular
        .module('scheduler.pages.admin')
        .controller('addLecturerCtrl', addLecturerCtrl);

    addLecturerCtrl.$inject = ['$scope', '$state', '$http', '$base64', '$uibModalInstance', 'toaster'];

    /** @ngInject */
    function addLecturerCtrl(scope, state, http, base64, uibModalInstance, toaster) {
        var vm = this;

        getSections();
        getSubjects();
        vm.save = save;

        function save() {
            http({
                method: 'POST', url: '/api/lecturers',
                headers: {'Authorization': 'Basic ' + base64.encode('admin' + ':' + 'hardpass')},
                data: {
                    name: vm.name,
                    ta: vm.ta,
                    sectionId : vm.section.id,
                    subjectId : vm.subject.id
                }
            }).success(function (data) {
                data.sectionName = vm.section.name;
                data.subjectName = vm.subject.name;
                uibModalInstance.close(data);
            }).error(function () {
                toaster.error({body: 'Can\'t add Sections'});
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


