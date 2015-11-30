/**
 * @desc formfields directive is used to display form fields.
 * @example <div form-fields></div>
 */
(function () {
  'use strict';
  angular
    .module('formBuilder')
    .directive('formFields', formFields);

  function formFields($compile, $http, formService) {

    return {
      restrict: 'EA',
      scope: {
        field: '='
      },
      link: link,
      replace:true,
      template: '<div class="container"></div>'
    };

    function link(scope, element) {
      // GET template content from path
      var templateUrl = getTemplateUrl(scope.field);
      if(templateUrl){
        $http.get(templateUrl).success(function (data) {
          element.html(data);
          $compile(element.contents())(scope);
        });
      }
    }

    function getTemplateUrl(field) {
      var type = field.type;
      var templateUrl = 'app/components/form/templates/fields-templates/';
      var supported_fields = formService.fields;
      var index = _.findIndex(supported_fields, function(eachField){
        return eachField.name === type;
      });

      if (index !== -1) {
        return templateUrl += type + '.html';
      }
    }
  }
})();

