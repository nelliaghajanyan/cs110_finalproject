(function () {
    'use strict';

    angular
        .module('scheduler.pages.admin', [])
        .config(routeConfig);

    routeConfig.$inject = ['$stateProvider'];

    /** @ngInject */
    function routeConfig(stateProvider) {
        stateProvider
            .state('pages.admin', {
                url: '/admin',
                views : {
                    '': {
                        templateUrl: 'src/app/pages/admin/admin.html',
                        controller: 'adminCtrl',
                        controllerAs: 'vm'
                    },
                    'subjects@pages.admin': {
                        templateUrl: 'src/app/pages/admin/panels/subjects/subjects.html',
                        controller: 'subjectsCtrl',
                        controllerAs: 'vm'
                    },
                    'sections@pages.admin': {
                        templateUrl: 'src/app/pages/admin/panels/sections/sections.html',
                        controller: 'sectionsCtrl',
                        controllerAs: 'vm'
                    },
                    'lecturers@pages.admin': {
                        templateUrl: 'src/app/pages/admin/panels/lecturers/lecturers.html',
                        controller: 'lecturersCtrl',
                        controllerAs: 'vm'
                    },
                    'rooms@pages.admin': {
                        templateUrl: 'src/app/pages/admin/panels/rooms/rooms.html',
                        controller: 'roomsCtrl',
                        controllerAs: 'vm'
                    }
                }

            });

    }

})();