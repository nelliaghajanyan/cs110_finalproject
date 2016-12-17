(function () {
    'use strict';

    angular
        .module('scheduler.pages.admin')
        .controller('deleteLecturerCtrl', deleteLecturerCtrl);

    deleteLecturerCtrl.$inject = ['$state', '$http', '$base64', '$uibModalInstance', 'toaster', 'lecturerId'];

    /** @ngInject */
    function deleteLecturerCtrl(state, http, base64, uibModalInstance, toaster, lecturerId) {
        var vm = this;

        vm.deleteLecturer = deleteLecturer;

        function deleteLecturer() {
            http({
                method: 'DELETE', url: '/api/lecturers/' + lecturerId,
                headers: {'Authorization': 'Basic ' + base64.encode('admin' + ':' + 'hardpass')},
            }).success(function () {
                uibModalInstance.close();
            }).error(function () {
                toaster.error({body: 'Can\'t delete Lecturer'});
            });
        }
    }

})();

