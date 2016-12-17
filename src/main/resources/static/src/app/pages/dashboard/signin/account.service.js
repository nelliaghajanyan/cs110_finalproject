
(function () {
    'use strict';

    angular
        .module('scheduler.pages.dashboard')
        .service("account", account);

    account.$inject = ['$cookies'];

    /** @ngInject */
    function account(cookies) {
        var now = new Date();

        return {
            setCookies: setCookies,
            getUsername: getUsername,
            getPassword: getPassword
        };

        function setCookies(newUsername, newPassword) {
            now.setMinutes(new Date().getMinutes() + 10);
            cookies.put('username', newUsername, {expires: now});
            cookies.put('password', newPassword, {expires: now});
        }

        function getUsername() {
            var username = cookies.get('username');
            var password = cookies.get('password');

            if (username != "" && username != undefined) {
                setCookies(username, password);
                return username;
            }
        }

        function getPassword() {
            var username = cookies.get('username');
            var password = cookies.get('password');

            if (password != "" && password != undefined) {
                setCookies(username, password);
                return password;
            }
        }
    }

})();