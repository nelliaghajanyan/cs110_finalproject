(function () {
    'use strict';

    angular
        .module('scheduler.pages.admin')
        .controller('addSectionCtrl', addSectionCtrl);

    addSectionCtrl.$inject = ['$state', '$http', '$base64', '$uibModalInstance', 'toaster'];

    /** @ngInject */
    function addSectionCtrl(state, http, base64, uibModalInstance, toaster) {
        var vm = this;

        vm.save = save;

        function save() {
                http({
                    method: 'POST', url: '/api/sections',
                    headers: {'Authorization': 'Basic ' + base64.encode('admin' + ':' + 'hardpass')},
                    data: {
                        name: vm.name
                    }
                }).success(function (data) {
                    uibModalInstance.close(data);
                }).error(function () {
                    toaster.error({body: 'Can\'t add Sections'});
                });

        }
    }

})();

