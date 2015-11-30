/**
 * App route configuration.
 */
(function () {
  'use strict';

  angular
    .module('formBuilder')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('', 'createform');
    $urlRouterProvider.when('/', 'createform');

    $stateProvider
      .state('createform', {
          url: '/createform',
          templateUrl: 'app/components/form/createform.html',
          controller: 'CreateFormController',
          controllerAs: 'vm',
          resolve:{
            formData : function($q, formService){
                var q = $q.defer();
                formService.getAllForms().then(function(response){
                  q.resolve(response);
                }, function(error){
                  q.resolve(error);
                });
                return q.promise;
              }
            }
        });

    $urlRouterProvider.otherwise('/');
  }

})();
