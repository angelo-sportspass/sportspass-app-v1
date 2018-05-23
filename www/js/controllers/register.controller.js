(function() {
  'use strict';

  angular
    .module('app')
    .controller('RegisterController', RegisterController);

  /** @ngInject */
  RegisterController.$inject = ['$rootScope', '$scope', '$window'];
  function RegisterController($rootScope, $scope, $window) {
    
    // Back Page
    $scope.back  = function()
    {
      $scope.mainPage.popPage();
    };
    
  }

})();
