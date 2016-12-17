/**
 * @author    : Bagrat Mukaelyan
 * @email     : bagratm@energizeglobal.com
 * created on : 11/25/16
 */
(function () {
    'use strict';

    angular
        .module('scheduler.pages.config')
        .factory("urlFactory", urlFactory);

    /** @ngInject */
    function urlFactory($location) {
        return {
            'request': function (config) {
                var protocol = $location.protocol();
                var host = $location.host();
                var port = $location.port();

                if (host == 'localhost') {
                    host = '35.164.29.38';
                }

                if (port !== 8080) {
                    port = 8080;
                }

                if (config.url.split('/')[1] === 'api') {
                    config.url = protocol + "://" + host + ':' + port + config.url;
                }
                return config;
            }
        }
    }
})();