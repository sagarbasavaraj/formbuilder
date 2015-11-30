/**
 * unit test for formfileds directive.
 */
(function () {
  'use strict';
  describe('directive : form-field', function () {
    var $compile,
      $rootScope, scope, element, httpBackend;

    beforeEach(module('formBuilder'));
    beforeEach(inject(function (_$compile_, _$rootScope_, _$httpBackend_) {
      $compile = _$compile_;
      $rootScope = _$rootScope_;
      scope = $rootScope.$new();
      httpBackend = _$httpBackend_;
      scope.form = {};
      scope.form.formFields = [];
      scope.form.formFields.push({
        "id": 1,
        "title": "New Field",
        "type": "textfield",
        "value": "",
        "required": true,
        "disabled": false
      });
      element = $compile("<div><div form-field field='field' ng-repeat='field in form.formFields'></div></div>")(scope);
      element.html('<label class="col-sm-2 control-label">{{field.title}}</label><input type="text" class="form-control" ' +
      'value="{{field.value}}" ng-required="field.required" ng-disabled="field.disabled">');
      element = $compile(element.contents())(scope);
      httpBackend.expect('GET', 'assets/locales/en.json')
        .respond({});
      scope.$digest();
    }));

    it('should have label element', function () {
      var labelElement = element.find('label');
      expect(labelElement).toBeDefined();
    });

    it('should have input element', function () {
      var inputElement = element.find('input');
      expect(inputElement).toBeDefined();
    });
  });
})();
