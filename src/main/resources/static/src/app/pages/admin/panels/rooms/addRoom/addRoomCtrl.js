(function () {
    'use strict';

    angular
        .module('scheduler.pages.admin')
        .controller('addRoomCtrl', addRoomCtrl);

    addRoomCtrl.$inject = ['$state', '$http', '$base64', '$uibModalInstance', 'toaster'];

    /** @ngInject */
    function addRoomCtrl(state, http, base64, uibModalInstance, toaster) {
        var vm = this;

        vm.daysOfWeek = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"];

        getLecturers();
        vm.save = save;

        vm.name = '';

        vm.room = {
            lecturerId: null,
            officeNumber: null,
            officeHourDay: null,
            officeHourTime: null,
            problemSolvingNumber: null,
            problemSolvingDay: null,
            problemSolvingTime: null
        };

        function save(room, lecturer) {
            room.lecturerName = lecturer.name;
            room.lecturerId = lecturer.id;
            http({
                method: 'POST',
                url: '/api/rooms',
                data: {
                    lecturerId: room.lecturerId,
                    officeNumber: room.officeNumber,
                    officeHourDay: room.officeHourDay,
                    officeHourTime: room.officeHourTime,
                    problemSolvingNumber: room.problemSolvingNumber,
                    problemSolvingDay: room.problemSolvingDay,
                    problemSolvingTime: room.problemSolvingTime
                },
                headers: {'Authorization': 'Basic ' + base64.encode('admin' + ':' + 'hardpass')}
            }).success(function (data) {
                room.id = data.id;
                room.ta = lecturer.ta;
                room.sectionName = lecturer.sectionName;
                room.subjectName = lecturer.subjectName;
                uibModalInstance.close(room);
            }).error(function (error) {
                alert(error.message);
                alert(error)
            });

        }

        function getLecturers() {
            http({
                method: 'GET', url: '/api/lecturers'
            }).success(function (data) {
                vm.getLecturers = data;
            }).error(function () {

            });
        };


    }

})();

