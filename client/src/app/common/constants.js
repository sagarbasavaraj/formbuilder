(function() {
  'use strict';

  angular
    .module('formBuilder')
    .constant('constant', {
      'baseUrl':'http://127.0.0.1:3000/forms/',
      'insert':'insert',
      'all':'formList'
    });
})();
