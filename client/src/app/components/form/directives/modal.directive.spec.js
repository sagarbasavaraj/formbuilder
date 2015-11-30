/**
 * unit test for modal directive.
 */
(function () {
  'use strict';
  describe('directive :  modal', function () {
    var $compile,
      $rootScope, element, httpBackend;

    beforeEach(module('formBuilder'));
    beforeEach(inject(function (_$compile_, _$rootScope_,_$httpBackend_) {
      $compile = _$compile_;
      $rootScope = _$rootScope_;
      httpBackend = _$httpBackend_;
      httpBackend.expect('GET', 'assets/locales/en.json')
        .respond({});
      element = $compile("<div><div modal showForm='showForm'><div class='modal-dialog modal-lg'>"+
      "</div></div></div>")($rootScope);
      $rootScope.$digest();
    }));

    it('should have an ng-transclude directive in it', function () {
      var transcludedElem = element.find('div[ng-transclude]');
      expect(transcludedElem.length).toBe(1);
    });

    it('should have modal dialog element in it', function () {
      var modalDialogElement = element.find('.modal-dialog');
      expect(modalDialogElement.length).toBe(1);
    });
  });
})();
