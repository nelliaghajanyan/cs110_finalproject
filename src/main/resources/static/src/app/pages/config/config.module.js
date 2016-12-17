/**
 * @author    : Bagrat Mukaelyan
 * @email     : bagratm@energizeglobal.com
 * created on : 11/25/16
 */
(function () {
    'use strict';

    angular
        .module('scheduler.pages.config', [])
        .config(function ($httpProvider) {
            $httpProvider.interceptors.push('urlFactory');
        });
})();