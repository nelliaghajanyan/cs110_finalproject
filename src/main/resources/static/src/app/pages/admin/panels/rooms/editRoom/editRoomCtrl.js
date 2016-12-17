(function () {
    'use strict';

    angular
        .module('scheduler.pages.admin')
        .controller('editRoomCtrl', editRoomCtrl);

    editRoomCtrl.$inject = ['$state', '$http', '$base64', '$uibModalInstance', 'toaster', 'room'];

    /** @ngInject */
    function editRoomCtrl(state, http, base64, uibModalInstance, toaster, room) {
        var vm = this;

        vm.daysOfWeek = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"];

        vm.edit = edit;

        vm.room = room;
        getLecturers();

        function edit() {
            http({
                method: 'PUT', url: '/api/rooms/' + room.id,
                headers: {'Authorization': 'Basic ' + base64.encode('admin' + ':' + 'hardpass')},
                data: {
                    lecturerId: room.lecturerId,
                    officeNumber: room.officeNumber,
                    officeHourDay: room.officeHourDay,
                    officeHourTime: room.officeHourTime,
                    problemSolvingNumber: room.problemSolvingNumber,
                    problemSolvingDay: room.problemSolvingDay,
                    problemSolvingTime: room.problemSolvingTime
                }
            }).success(function (data) {
                uibModalInstance.close(room);
            }).error(function () {
                toaster.error({body: 'Can\'t Edit Room'});
            });
        }

        function getLecturers() {
            http({
                method: 'GET', url: '/api/lecturers'
            }).success(function (data) {
                vm.lecturers = data;
            }).error(function () {
                toaster.error({body: 'Server temporary unavailable'});
            });
        }

    }

})();

