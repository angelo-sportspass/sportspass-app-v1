(function() {
  'use strict';

  angular
    .module('app')
    .controller('RegisterController', RegisterController);

  /** @ngInject */
  RegisterController.$inject = ['$rootScope', '$scope', '$window', 'RegisterService'];
  function RegisterController($rootScope, $scope, $window, RegisterService) {
    
    // Back Page
    $scope.back  = function()
    {
      $scope.mainPage.popPage();
    };

    $scope.register = function(data)
    {
      console.log(data);

      RegisterService.register(data).then(function(response){
        console.log(response);
      });
      return false;
    };

    $scope.login = function()
    { 
      $scope.mainPage.pushPage('login.html', { animation : 'lift' });
    };
    
  }

})();
