/**
 * This file uses the Page Object pattern to define the main page for tests.
 */
(function () {
  'use strict';
  var MainPage = function () {
    this.sleepTime = 1000;
    this.h1Element = element(by.css('.page-title'));
    this.formName = element(by.css('#formName'));
    this.addField = element(by.css('.add-field'));
    this.selectField = element(by.css('.field-drop-down'));
    this.fieldList = element.all(by.repeater('field in vm.formModel.formFields'));
    this.formFields = element.all(by.repeater('field in form.formFields'));
    this.closeBtn = element(by.css('.btn-close'));
    this.previewBtn = element(by.css('.btn-preview'));
    this.resetBtn = element(by.css('.btn-reset'));
    this.saveBtn = element(by.css('.btn-save'));

    this.selectDropdownByIndex = function (dropdownElement, index) {
      dropdownElement.click();
      dropdownElement.all(by.css('option')).get(index).click();
    };

  };
  module.exports = new MainPage();
})();
