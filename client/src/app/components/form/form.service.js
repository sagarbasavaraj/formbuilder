/**
 * Service to handle all form related operations.
 * Makes call to server using rest api to perform save and retrieval of form data.
 * @namespace Factories
 */
(function () {
  'use strict';

  angular
    .module('formBuilder')
    .factory('formService', formService);

  /** @ngInject */
  function formService($http, $q, constant) {
    return {
      //Supported fields.
      fields: [
        {
          name: 'textfield',
          value: 'Textfield'
        },
        {
          name: 'email',
          value: 'E-mail'
        },
        {
          name: 'password',
          value: 'Password'
        }
      ],
      saveForm: saveForm,
      getAllForms: getAllForms
    };

    /**
     * @name saveForm
     * @desc Method to store form.
     * @param {Object} form - form data
     * @returns {Object} promise.
     */
    function saveForm(formData) {
      var q = $q.defer();
      if (!formData) {
        throw new Error('Form data is invalid');
      }
      $http({
        method: 'POST',
        url: constant.baseUrl + constant.insert,
        data: angular.toJson(formData)
      }).then(function (response) {
        q.resolve(response.data);
      }, function (error) {
        q.reject(error.data);
      });
      return q.promise;
    }

    /**
     * @name getAllForms
     * @desc Method to get all forms.
     * @returns {Object} promise.
     */
    function getAllForms() {
      var q = $q.defer();
      $http({
        method: 'GET',
        url: constant.baseUrl + constant.all
      }).then(function (response) {
        q.resolve(response.data);
      }, function (error) {
        q.reject(error.data);
      });
      return q.promise;
    }
  }
})();
