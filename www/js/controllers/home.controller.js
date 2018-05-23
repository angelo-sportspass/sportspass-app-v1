(function() {
  'use strict';

  angular
    .module('app')
    .controller('HomeController', HomeController);

  /** @ngInject */
  HomeController.$inject = ['$rootScope', '$scope', '$window', 'LoginService'];
  function HomeController($rootScope, $scope, $window, LoginService) {
    
    // Back Page
    $scope.back  = function()
    {
      $scope.mainPage.popPage();
    };

    // Back Page
    $scope.hotoffers  = function()
    {
      $scope.mainPage.pushPage('hotoffers.html', { animation : 'lift' });
    };
  }

})();
