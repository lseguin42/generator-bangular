'use strict';

describe('Directive: <%= camelName %>', function () {

  beforeEach(module('oggApp'));
  beforeEach(module('app/directives/<%= slugName %>/<%= slugName %>.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should ...', inject(function ($compile) {
    element = angular.element('<flash></flash>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(1).toBe(1);
  }));
});
