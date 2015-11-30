/**
 * Unit test for formService.
 */
(function () {
  'use strict';
  describe('form api Service', function () {
    var formModel;
    beforeEach(module('formBuilder'));

    beforeEach(inject(function (_formModel_) {
      formModel = _formModel_;
    }));

    it("should define form id", function () {
      expect(formModel.formId).not.toBeUndefined();
    });

    it("should set the default value to form id", function () {
      expect(formModel.formId).toBe(1);
    });

    it("should define form name", function () {
      expect(formModel.formName).not.toBeUndefined();
    });

    it("should define form fields", function () {
      expect(formModel.formFields).not.toBeUndefined();
      expect(formModel.formFields.length).toEqual(0);
    });

  });
})();
