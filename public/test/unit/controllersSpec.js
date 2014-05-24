'use strict';

/* jasmine specs for controllers go here */
describe('Controllers tests', function () {

    beforeEach(function () {
        this.addMatchers({
            toEqualData: function (expected) {
                return angular.equals(this.actual, expected);
            }
        });
    });

    beforeEach(module('epost'));

    describe('ConnectCtrl', function () {
        var scope, $httpBackend, rootScope;

        beforeEach(inject(function (_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
            rootScope = $rootScope;
            scope = $rootScope.$new();
            $controller(ConnectCtrl, {$scope: scope});
        }));

        it('should', function () {
            $httpBackend.expectGET('/test').respond(200, {system:'/test'});
            $httpBackend.expectGET('/prod').respond(200, {system:'/prod'});
	    scope.reload()
            rootScope.$digest()
            $httpBackend.flush();
            expect(scope.resultA).toEqualData({system:'/test'});
            expect(scope.resultB).toEqualData({system:'/prod'});
        });
        it('should', function () {
            $httpBackend.expectGET('/staging').respond(200, {system:'/staging'});
            $httpBackend.expectGET('/pre').respond(200, {system:'/pre'});
	    rootScope.config = {valuea:'staging', valueb:'pre'}
	    scope.reload()
            rootScope.$digest()
            $httpBackend.flush();
            expect(scope.resultA).toEqualData({system:'/staging'});
            expect(scope.resultB).toEqualData({system:'/pre'});
        });
    });
});
