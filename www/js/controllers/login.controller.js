(function() {
  'use strict';

  angular
    .module('app')
    .controller('LoginController', LoginController);

  /** @ngInject */
  LoginController.$inject = ['$rootScope', '$scope', '$window', 'LoginService'];
  function LoginController($rootScope, $scope, $window, LoginService) {
    
    // Back Page
    $scope.back  = function()
    {
      $scope.mainPage.popPage();
    };

    $scope.login = function( data )
    {
      console.log(data);
    };

    // REGISTER PAGE
    $scope.register = function()
    { 
      $scope.mainPage.pushPage('register.html', { animation : 'lift' });
    };


    $scope.home = function()
    {
      $scope.mainPage.pushPage('home.html', { animation : 'lift' });
    };
    
  }

})();
