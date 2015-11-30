/**
 * @desc modal directive used to display modal containing form.
 * @example <div modal></div>
 */
(function(){
  'use strict';
  angular
    .module('formBuilder')
    .directive('modal', modal);

  function modal(){

    return{
      restrict: 'EA',
      scope:{
        showForm : '='
      },
      link:link,
      transclude:true,
      replace:true,
      template:'<div ng-transclude></div>'
    };

    function link(scope, element){
      element.on('hidden.bs.modal', function () {
        scope.$apply(function(){
          scope.showForm = false;
        });
      });
    }
  }
})();
