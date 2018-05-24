(function() {
  'use strict';

  angular
    .module('app')
    .controller('MainController', MainController);

  /** @ngInject */
  MainController.$inject = ['$rootScope', '$scope', '$window'];
  function MainController($rootScope, $scope, $window) {

    $scope.back  = function()
    {
      $scope.mainPage.popPage();
    };

    // LOGIN PAGE
    $scope.login = function()
    { 
      $scope.mainPage.pushPage('login.html', { animation : 'lift' });
    };

    // REGISTER PAGE
    $scope.register = function()
    { 
      $scope.mainPage.pushPage('register.html', { animation : 'lift' });
    };

    // $scope.open = function() {
      // cordova.InAppBrowser.open($scope.link,'_system');
      // $window.open($scope.link, '_blank')
      // window.open(encodeURI($scope.link), '_system');
    // };
  }

})();
