/**
 * Module configuration.
 */
(function() {
  'use strict';

  angular
    .module('formBuilder')
    .config(config);

  /** @ngInject */
  function config($translateProvider) {
    //Config angular translate
    $translateProvider.useStaticFilesLoader({
      prefix: 'assets/locales/',
      suffix: '.json'
    });
    $translateProvider.preferredLanguage('en');
    $translateProvider.useSanitizeValueStrategy('sanitizeParameters');
  }

})();
