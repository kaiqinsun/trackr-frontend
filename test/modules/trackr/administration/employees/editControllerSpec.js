define(['baseTestSetup'], function(baseTestSetup) {
    'use strict';
    describe('trackr.administration.controllers.employees.edit', function () {
        var EditController, scope;
        baseTestSetup();
        beforeEach(inject(function($rootScope, $controller) {
            scope = $rootScope.$new();
            EditController = $controller('trackr.administration.controllers.employees.edit', {
                $scope: scope,
                'createOrUpdateModal.userdata': {
                    employee: {
                        credential: {
                            authorities: []
                        }
                    },
                    states: []
                }
            });
        }));

        beforeEach(inject(function($httpBackend) {
            $httpBackend.flush();
        }));

        it('must have an employee in scope', function() {
            expect(scope.employee).toBeDefined();
        });

        it('must have the federal states in scope', function() {
            expect(scope.states).toBeDefined();
        });

        it('must have the selectedAuthorities in the scope', function() {
            expect(scope.selectedAuthorities).toBeDefined();
        });
    });
});