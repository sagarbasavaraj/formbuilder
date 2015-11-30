/**
 * unit test for formview directive.
 */
(function () {
  'use strict';
  describe('directive :  form-view', function () {
    var $compile,
      $rootScope, scope, element, httpBackend;

    beforeEach(module('formBuilder'));
    beforeEach(inject(function (_$compile_, _$rootScope_,_$httpBackend_) {
      $compile = _$compile_;
      $rootScope = _$rootScope_;
      scope = $rootScope.$new();
      httpBackend = _$httpBackend_;
      scope.formModel = {
        formId : 1,
        formName :'My form',
        formFields : []
      };
      element = $compile(angular.element("<div form-view form='formModel'></div>"))(scope);
      httpBackend.expect('GET', 'assets/locales/en.json')
        .respond({});
      scope.$digest();
    }));

    it('should have h2 element', function () {
      var headerElement = element.find('h2');
      expect(headerElement).toBeDefined();
      expect(headerElement.text()).toEqual(scope.formModel.formName);
    });
  });
})();
