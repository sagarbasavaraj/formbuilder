/**
 * @desc formview used to display form.
 * @example <div form-view></div>
 */
(function(){
  'use strict';
  angular
    .module('formBuilder')
    .directive('formView', formView);

  function formView(){

    return{
      restrict: 'EA',
      scope:{
        form : '='
      },
      templateUrl: 'app/components/form/templates/formview.html'
    };
  }
})();
