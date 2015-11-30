(function() {
  'use strict';

  angular
    .module('formBuilder')
    .constant('constant', {
      'baseUrl':'http://localhost:3002/forms/',
      'insert':'insert',
      'all':'formList'
    });
})();
