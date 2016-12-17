(function () {
    'use strict';

    angular
        .module('scheduler.pages.admin')
        .controller('deleteSectionCtrl', deleteSectionCtrl);

    deleteSectionCtrl.$inject = ['$state', '$http', '$base64', '$uibModalInstance', 'toaster', 'sectionId'];

    /** @ngInject */
    function deleteSectionCtrl(state, http, base64, uibModalInstance, toaster, sectionId) {
        var vm = this;

        vm.deleteSection = deleteSection;

        function deleteSection() {
            http({
                method: 'DELETE', url: '/api/sections/' + sectionId,
                headers: {'Authorization': 'Basic ' + base64.encode('admin' + ':' + 'hardpass')},
            }).success(function () {
                uibModalInstance.close();
            }).error(function () {
                toaster.error({body: 'Can\'t delete Section'});
            });
        }
    }

})();

