(function () {
    'use strict';

    angular
        .module('scheduler.pages.admin')
        .controller('editSectionCtrl', editSectionCtrl);

    editSectionCtrl.$inject = ['$state', '$http', '$base64', '$uibModalInstance', 'toaster', 'section'];

    /** @ngInject */
    function editSectionCtrl(state, http, base64, uibModalInstance, toaster, section) {
        var vm = this;

        vm.edit = edit;

        vm.section = section;

        function edit(section) {
            http({
                method: 'PUT', url: '/api/subjects/' + section.id,
                headers: {'Authorization': 'Basic ' + base64.encode('admin' + ':' + 'hardpass')},
                data: {
                    name: section.name
                }
            }).success(function (data) {
                uibModalInstance.close(vm.section);
            }).error(function () {
                toaster.error({body: 'Can\'t add Section'});
            });
        }
    }

})();

