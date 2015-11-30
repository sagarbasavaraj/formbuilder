/**
 * Spec to test End to end functionality.
 */
(function () {
  'use strict';
  describe('The main view', function () {
    var page;

    beforeEach(function () {
      browser.get('/index.html');
      page = require('./app.po');
    });

    it('should have a title', function () {
      expect(browser.getTitle()).toEqual('Form Builder');
    });

    it('should include page header', function () {
      expect(page.h1Element.getText()).toBe('Form Builder');
    });

    describe('Form creation', function () {
      it('should create new form with fields', function () {
        page.formName.clear();
        page.formName.sendKeys('Login form');
        expect(page.formName.getAttribute('value')).toEqual('Login form');
        page.selectField.click();
        page.selectDropdownByIndex(page.selectField, 0);
        browser.driver.sleep(page.sleepTime);
        page.addField.click();
        browser.waitForAngular();

        expect(page.fieldList.count()).toBe(1);
        page.fieldList.then(function (lists) {
          var len = lists.length;
          for (var index = 0; index < len; index++) {
            lists[index].element(by.css('.accordion-toggle')).click();
            browser.driver.sleep(1000);
            browser.waitForAngular();
            var titleField = lists[index].element(by.model('field.title'));
            titleField.clear();
            titleField.sendKeys('My Field ' + index);
            var valueField = lists[index].element(by.model('field.value'));
            valueField.clear();
            valueField.sendKeys('Default ' + index);
          }
          browser.driver.sleep(2000);
          page.previewBtn.click();
          browser.driver.sleep(2000);
          page.formFields.then(function (fields) {
            var len = fields.length;
            for (var index = 0; index < len; index++) {
              (function (j) {
                fields[j].element(by.css('.control-label')).getAttribute('innerText').then(function (text) {
                  expect(text).toEqual('My Field ' + j);
                });
                fields[j].element(by.css('[type="text"]')).getAttribute('value').then(function (text) {
                  expect(text).toEqual('Default ' + j);
                });
              })(index);
            }
          });
          page.closeBtn.click();
          browser.driver.sleep(2000);
          page.saveBtn.click();
          browser.waitForAngular();
          browser.driver.sleep(2000);
        });
      });

      it('should reset the added form fields', function () {
        page.formName.clear();
        page.formName.sendKeys('Login form');
        expect(page.formName.getAttribute('value')).toEqual('Login form');
        page.selectField.click();
        page.selectDropdownByIndex(page.selectField, 1);
        browser.driver.sleep(page.sleepTime);
        page.addField.click();
        browser.waitForAngular();
        expect(page.fieldList.count()).toBe(1);
        page.resetBtn.click();
        browser.driver.sleep(page.sleepTime);
        expect(page.fieldList.count()).toBe(0);
      });

      it('should delete the added form field', function () {
        page.formName.clear();
        page.formName.sendKeys('Login form');
        expect(page.formName.getAttribute('value')).toEqual('Login form');
        page.selectField.click();
        page.selectDropdownByIndex(page.selectField, 2);
        browser.driver.sleep(page.sleepTime);
        page.addField.click();
        browser.waitForAngular();

        expect(page.fieldList.count()).toBe(1);
        page.fieldList.then(function (lists) {
          var len = lists.length;
          for (var index = 0; index < len; index++) {
            lists[index].element(by.css('.accordion-toggle')).click();
            browser.driver.sleep(2000);
            browser.waitForAngular();
            var deleteBtn = lists[index].element(by.css('.btn-danger'));
            deleteBtn.click();
            browser.driver.sleep(2000);
          }
          expect(page.fieldList.count()).toBe(0);
        });
      });
    });

  });
})();
