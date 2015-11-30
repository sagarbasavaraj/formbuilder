/**
 * Model holding form properties.
 */
(function () {
  'use strict';
  angular
    .module('formBuilder')
    .service('formModel', formModel);

  function formModel() {
    //Form Id
    this.formId = 1;
    //Form name
    this.formName = '';
    //Form fields
    this.formFields = [];
  }
})();
