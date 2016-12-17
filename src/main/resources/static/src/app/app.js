'use strict';

angular
    .module('scheduler', [
        'ngCookies',
        'ngAnimate',
        'ui.router',
        'ui.bootstrap',
        'base64',
        'xeditable',
        'toaster',
        'smart-table',

        'scheduler.pages'
    ])
    .run(run);

/** @ngInject */
function run(editableOptions) {
    editableOptions.theme = 'bs3';
}