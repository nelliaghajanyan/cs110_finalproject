(function () {
    'use strict';

    angular
        .module('scheduler.pages.admin')
        .controller('roomsCtrl', roomsCtrl);

    roomsCtrl.$inject = ['$http', '$base64', '$uibModal'];

    /** @ngInject */
    function roomsCtrl(http, base64, uibModal) {
        var vm = this;

        getRooms();
        vm.addRoomDialog = addRoomDialog;
        vm.editRoomDialog = editRoomDialog;
        vm.deleteRoomDialog = deleteRoomDialog;

        ////////////////

        function getRooms() {
            http({
                method: 'GET', url: '/api/rooms'
            }).success(function (data) {
                vm.rooms = data;
            }).error(function () {

            });
        }

        function addRoomDialog(size) {
            var modalInstance = uibModal.open({
                animation: true,
                templateUrl: 'src/app/pages/admin/panels/rooms/addRoom/addRoom.html',
                controller: 'addRoomCtrl as vm',
                size: size
            });

            modalInstance.result.then(function (room) {
                vm.rooms.push(room);
            });
        }

        function editRoomDialog(index) {
            var modalInstance = uibModal.open({
                animation: true,
                templateUrl: 'src/app/pages/admin/panels/rooms/editRoom/editRoom.html',
                controller: 'editRoomCtrl as vm',
                resolve: {
                    room: function () {
                        return vm.rooms[index];
                    }
                }
            });

            modalInstance.result.then(function (room) {
                vm.rooms.splice(index, 1);
                vm.rooms.push(room);
            });
        }

        function deleteRoomDialog(index) {
            var modalInstance = uibModal.open({
                animation: true,
                templateUrl: 'src/app/pages/admin/panels/rooms/deleteRoom/deleteRoom.html',
                controller: 'deleteRoomCtrl as vm',
                resolve: {
                    roomId: function () {
                        return vm.rooms[index].id;
                    }
                }
            });

            modalInstance.result.then(function () {
                vm.rooms.splice(index, 1);
            });
        }

    }

})();

