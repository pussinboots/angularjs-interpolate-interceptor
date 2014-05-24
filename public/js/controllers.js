'use strict';

/* Controllers */

function ConnectCtrl($scope, ServiceA, ServiceB) {
        $scope.reload = function() {
		$scope.resultA = ServiceA.get();
		$scope.resultB = ServiceB.get();
	}
}
