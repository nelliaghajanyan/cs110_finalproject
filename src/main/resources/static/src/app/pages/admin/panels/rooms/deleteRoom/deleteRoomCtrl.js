(function () {
    'use strict';

    angular
        .module('scheduler.pages.admin')
        .controller('deleteRoomCtrl', deleteRoomCtrl);

    deleteRoomCtrl.$inject = ['$state', '$http', '$base64', '$uibModalInstance', 'toaster', 'roomId'];

    /** @ngInject */
    function deleteRoomCtrl(state, http, base64, uibModalInstance, toaster, roomId) {
        var vm = this;

        vm.deleteRoom = deleteRoom;

        function deleteRoom() {
            http({
                method: 'DELETE', url: '/api/rooms/' + roomId,
                headers: {'Authorization': 'Basic ' + base64.encode('admin' + ':' + 'hardpass')},
            }).success(function () {
                uibModalInstance.close();
            }).error(function () {
                toaster.error({body: 'Can\'t delete Room'});
            });
        }
    }

})();

