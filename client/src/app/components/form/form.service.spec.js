/**
 * Unit test for formService.
 */
(function () {
  'use strict';
  describe('form api Service', function () {
    var formService, httpBackend, constant;
    beforeEach(module('formBuilder'));

    beforeEach(inject(function (_formService_, _$httpBackend_,_constant_) {
      formService = _formService_;
      httpBackend = _$httpBackend_;
      constant = _constant_;
    }));

    it("should define form fields", function () {
      expect(formService.fields).not.toBeUndefined();
    });

    it("should return list of supported form fields", function () {
      expect(formService.fields.length).toBeGreaterThan(0);
    });

    it("should save the form data to server", function () {
      var url = constant.baseUrl + constant.insert;
      var formData = {
        formId: 1,
        formName: 'My form',
        formFields: [{
          "id": 1,
          "title": "New Field",
          "type": 'textfield',
          "value": "",
          "required": true,
          "disabled": false
        }]
      };
      httpBackend.expect('GET', 'assets/locales/en.json')
        .respond({});
      httpBackend.whenPOST(url).respond('form data saved.');
      var promise = formService.saveForm(formData);
      promise.then(function (data) {
        expect(data).toEqual('form data saved.');
      });
      httpBackend.flush();
    });

    it("should return list of forms from server", function () {
      var url = constant.baseUrl + constant.all;
      var formData = [{
        formId: 1,
        formName: 'My form',
        formFields: [{
          "id": 1,
          "title": "New Field",
          "type": 'textfield',
          "value": "",
          "required": true,
          "disabled": false
        }]
      }];
     httpBackend.expect('GET', 'assets/locales/en.json')
        .respond({});
      httpBackend.whenGET(url).respond(formData);
      var promise = formService.getAllForms();
      promise.then(function (data) {
        expect(data.length).toBeGreaterThan(0);
      });
      httpBackend.flush();
    });
  });
})();
