(function () {
    'use strict';

    angular
        .module('scheduler.pages.dashboard', [])
        .config(routeConfig);

    routeConfig.$inject = ['$stateProvider'];

    /** @ngInject */
    function routeConfig(stateProvider) {
        stateProvider
            .state('pages.dashboard', {
                url: '/dashboard',
                templateUrl: 'src/app/pages/dashboard/dashboard.html',
                controller: 'dashboardCtrl as vm'
            });
    }

})();