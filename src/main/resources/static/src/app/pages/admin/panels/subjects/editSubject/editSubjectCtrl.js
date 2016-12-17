(function () {
    'use strict';

    angular
        .module('scheduler.pages.admin')
        .controller('editSubjectCtrl', editSubjectCtrl);

    editSubjectCtrl.$inject = ['$state', 'account', '$http', '$base64', '$uibModalInstance', 'toaster', 'subject'];

    /** @ngInject */
    function editSubjectCtrl(state, account, http, base64, uibModalInstance, toaster, subject) {
        var vm = this;
        var username = account.getUsername();
        var password = account.getPassword();

        vm.edit = edit;

        vm.subject = subject;

        function edit(subject) {
            if ((username != "" && username != undefined) && (password != "" && password != undefined )) {
                http({
                    method: 'PUT', url: '/api/subjects/' + subject.id,
                    headers: {'Authorization': 'Basic ' + base64.encode(username + ':' + password)},
                    data: {
                        name: subject.name
                    }
                }).success(function (data) {
                    uibModalInstance.close(vm.subject);
                }).error(function () {
                    toaster.error({body: 'Can\'t add Subject'});
                });
            } else {
                state.go('pages.dashboard');
            }
        }
    }

})();

