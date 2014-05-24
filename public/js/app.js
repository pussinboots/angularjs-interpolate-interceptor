'use strict';

/* App Module */
var myModule = angular.module('epost', ['Services'])

myModule.config(function ($routeProvider) {
    $routeProvider
        .when('/connect', { templateUrl: 'partials/connect-detail.html', controller: ConnectCtrl})
        .otherwise({ redirectTo: '/connect' });
})
myModule.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push('httpInterpolarteInterceptor');
}])

myModule.factory('httpInterpolarteInterceptor', function ($rootScope, $interpolate) {
    return {
        request: function (config) {
            var exp = $interpolate(config.url);
            config.url  = exp({config: $rootScope.config})
            return config;
        }
    };
});

myModule.run(function ($rootScope) {
	$rootScope.config = {valuea:'test', valueb:'prod'}
});
