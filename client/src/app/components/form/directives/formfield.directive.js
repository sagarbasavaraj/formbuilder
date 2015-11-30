/**
 * @desc formfields directive used to display form fields.
 * @example <div form-fields></div>
 */
(function () {
  'use strict';
  angular
    .module('formBuilder')
    .directive('formField', formField);

  function formField($compile, $http, formService, $templateCache) {

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
      // Get fields template based on type.
      var templateUrl = getTemplateUrl(scope.field);
      if(templateUrl){
        $http({
          method:'get',
          url:templateUrl,
          cache:$templateCache
          }).then(function (response) {
          //append templates content to element.
          element.html(response.data);
          //Compile element contents against scope.
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

