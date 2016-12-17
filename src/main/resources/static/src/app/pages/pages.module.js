(function () {
    'use strict';

    angular
        .module('scheduler.pages', [
            //'scheduler.pages.config',
            'scheduler.pages.admin',
            'scheduler.pages.dashboard'
        ])
        .config(routeConfig);

    routeConfig.$inject = ['$urlRouterProvider', '$stateProvider'];

    /** @ngInject */
    function routeConfig(urlRouterProvider, stateProvider) {
        urlRouterProvider.otherwise('/dashboard');
        stateProvider
            .state('pages', {
                abstract: true,
                template: '<div ui-view></div>'
            })
    }

})();