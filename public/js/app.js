'use strict';

/* App Module */
var myModule = angular.module('demoApp', ['Services', 'angularjs-interpolate-interceptor'])

myModule.config(function ($routeProvider) {
    $routeProvider
        .when('/connect', { templateUrl: 'partials/connect-detail.html', controller: ConnectCtrl})
        .otherwise({ redirectTo: '/connect' });
})
myModule.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push('interpolateInterceptor');
}])

myModule.run(function ($rootScope) {
	$rootScope.config = {valuea:'test', valueb:'prod'}
});
