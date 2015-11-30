/**
 * CreateForm controller.
 */
(function () {
  'use strict';

  angular
    .module('formBuilder')
    .controller('CreateFormController', CreateFormController);

  /** @ngInject */
  function CreateFormController($scope, formModel, formService, $log, formData) {
    var vm = this;
    vm.formModel = formModel;

    vm.field = {};
    vm.field.types = formService.fields;
    vm.field.type = vm.field.types[0].name;
    vm.field.count = 0;
    vm.formCount = 0;
    vm.showForm = false;
    vm.msg = null;

    vm.addField = addField;
    vm.deleteField = deleteField;
    vm.preview = preview;
    vm.reset = reset;
    vm.saveForm = saveForm;
    vm.closeAlert = closeAlert;

    init();

    function init(){
      if(formData){
         if(formData.error){
          vm.msg = formData.error;
         }else{
            vm.formCount = formData.length;
            vm.formModel.formId = vm.formCount + 1;
         }
      }
    }

  /**
   * Method to add fields.
   */
   function addField() {
      vm.field.count++;

      var newField = {
        "id": vm.field.count,
        "title": vm.field.type,
        "type": vm.field.type,
        "value": "",
        "required": true,
        "disabled": false
      };
      vm.formModel.formFields.push(newField);
    }

    /**
     * Method to delete fields.
     * @params fieldId Field id.
     */
    function deleteField(fieldId) {
      var index;
      for (index = 0; index < vm.formModel.formFields.length; index++) {
        if (vm.formModel.formFields[index].id === fieldId) {
          vm.formModel.formFields.splice(index, 1);
          break;
        }
      }
    }

    /**
     * Method to preview form.
     */
    function preview(){
      vm.showForm = true;
    }

    function reset() {
      var length = vm.formModel.formFields.length;
      if (length > 0) {
        vm.formModel.formFields.splice(0, length);
        vm.field.count = 0;
      }
    }

    /**
     * Method to save form.
     */
    function saveForm() {
      try {
        formService.saveForm(vm.formModel).then(function (response) {
          if(response.error){
             vm.msg = response.error;
          }else{
             vm.msg = response;
             vm.formCount += 1;
             vm.formModel.formId = vm.formCount;
             vm.formModel.formName = 'My form';
             vm.reset();
          }
        }, function (error) {
          $log.log('error' + error);
        });
      } catch (error) {
        $log.error('Error in fetching form data:' + error);
      }
    }

    /**
     * Method to close alert.
     */
    function closeAlert() {
      vm.msg = null;
    }
  }
})();
