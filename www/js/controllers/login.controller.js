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

      LoginService.login(data).then(function(response){

        var user = JSON.stringify(response.data);
        localStorage.setItem('user', user);

        $scope.home();
        console.log(user);

      }, function(error) {
        
          if (error.status == 404) {
            vm.errorMessage = 'User ' + error.statusText + '.';
          } else if (error.status == 403) {
            vm.errorMessage = 'Username / Password invalid.';
          }
      });

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
