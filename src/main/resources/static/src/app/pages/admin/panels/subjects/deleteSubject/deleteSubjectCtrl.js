(function () {
    'use strict';

    angular
        .module('scheduler.pages.admin')
        .controller('deleteSubjectCtrl', deleteSubjectCtrl);

    deleteSubjectCtrl.$inject = ['$state', '$http', '$base64', '$uibModalInstance', 'toaster', 'subjectId'];

    /** @ngInject */
    function deleteSubjectCtrl(state, http, base64, uibModalInstance, toaster, subjectId) {
        var vm = this;

        vm.deleteSubject = deleteSubject;

        function deleteSubject() {
            http({
                method: 'DELETE', url: '/api/subjects/' + subjectId,
                headers: {'Authorization': 'Basic ' + base64.encode('admin' + ':' + 'hardpass')},
            }).success(function () {
                uibModalInstance.close();
            }).error(function () {
                toaster.error({body: 'Can\'t add Subject'});
            });
        }
    }

})();

