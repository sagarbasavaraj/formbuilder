/**
 * Unit test for createform controller.
 */
(function () {
  'use strict';
  describe('CreateFormController', function () {
    var $scope, $rootScope, controller, formModel, formService, log;

    var formData = [{
      formId: 1,
      formName: 'My form',
      formFields: []
    }];

    beforeEach(module('formBuilder'));

    beforeEach(inject(function (_$rootScope_, $controller, _formModel_, _$log_, _formService_) {
      $rootScope = _$rootScope_;
      $scope = $rootScope.$new();
      formModel = _formModel_;
      formService = _formService_;
      log = _$log_;
      controller = $controller('CreateFormController as vm', {
        '$scope': $scope,
        'formModel': formModel,
        'formService': formService,
        '$log': log,
        'formData': formData
      });
    }));

    it('should set the form Model', function () {
      expect(controller.formModel).not.toBeUndefined();
    });
    it('should set the field', function () {
      expect(controller.field).not.toBeUndefined();
    });
    it('should set the default value of field.count', function () {
      expect(controller.field.count).toBe(0);
    });
    it('should set the default value of showform', function () {
      expect(controller.showForm).toBe(false);
    });

    it('should set the default value of msg to be null', function () {
      expect(controller.msg).toBe(null);
    });

    describe('CreateFormController addField() function', function () {
      it('should add field "textfield"', function () {
        controller.field.type = 'textfield';
        controller.addField();
        expect(controller.formModel.formFields[0].type).toEqual('textfield');
      });
      it('should add field "email"', function () {
        controller.field.type = 'email';
        controller.addField();
        expect(controller.formModel.formFields[0].type).toEqual('email');
      });
      it('should add field "password"', function () {
        controller.field.type = 'password';
        controller.addField();
        expect(controller.formModel.formFields[0].type).toEqual('password');
      });
    });

    describe('CreateFormController deleteField() function', function () {
      it('should delete field "textfield"', function () {
        controller.field.type = 'textfield';
        controller.addField();
        controller.deleteField(controller.field.count);
        expect(controller.formModel.formFields.length).toEqual(0);
      });
      it('should delete field "email"', function () {
        controller.field.type = 'email';
        controller.addField();
        controller.deleteField(controller.field.count);
        expect(controller.formModel.formFields.length).toEqual(0);
      });
      it('should delete field "password"', function () {
        controller.field.type = 'password';
        controller.addField();
        controller.deleteField(controller.field.count);
        expect(controller.formModel.formFields.length).toEqual(0);
      });
    });

    describe('CreateFormController reset() function', function () {
      it('should remove all the fields that are added to formField of formModel', function () {
        controller.field.type = 'textfield';
        controller.addField();
        controller.field.type = 'email';
        controller.addField();
        controller.field.type = 'password';
        controller.addField();
        controller.reset();
        expect(controller.formModel.formFields.length).toEqual(0);
      });
    });

    describe('CreateFormController preview() function', function () {
      it('should set showForm to true', function () {
        controller.preview();
        expect(controller.showForm).toBe(true);
      });
    });

    describe('CreateFormController closeAlert() function', function () {
      it('should reset the msg to null', function () {
        controller.closeAlert();
        expect(controller.msg).toBe(null);
      });
    });

    describe('CreateFormController saveForm() function', function () {
      var $q, formServiceDeffer;
      beforeEach(inject(function (_$q_) {
        $q = _$q_;
      }));
      it('should send form data to server', function () {
        formServiceDeffer = $q.defer();
        formServiceDeffer.resolve('form data saved.');
        spyOn(formService, 'saveForm').and.returnValue(formServiceDeffer.promise);
        formService.saveForm().then(function (data) {
          expect(data).toEqual('form data saved.');
          expect(controller.msg).toEqual('form data saved.');
        });
      });
    });

  });
})();
