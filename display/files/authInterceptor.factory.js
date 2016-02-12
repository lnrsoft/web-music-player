/**
 * Authorization Interceptor Factory
 * @version 1.0.0
 */
'use strict';
angular
.module('wmpApp')
.factory('AuthInterceptor', ['User', '$q', '$window', function(User, $q, $window) {
    var authInterceptor = {
        request: function(config) {
            //before each request, add token if it exists
            var token = User.getToken();
            if (token && (User.exp > Math.trunc(Date.now() / 1000))) {
                //valid token to provide, add it in the Authorization header
                config.headers['Authorization'] = 'Bearer ' + token;
            }
            return config;
        },
        responseError: function(rejection) {
            //after an unauthorized request, redirect user to sign-in form
            if (rejection.status === 401) {
                $window.location = '/sign';
            }
            return $q.reject(rejection);
        }
    };
    return authInterceptor;
}])
.config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor');
}]);
