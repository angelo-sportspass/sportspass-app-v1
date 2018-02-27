(function() {
  'use strict';

  angular
    .module('app')
    .controller('MainController', MainController);

  /** @ngInject */
  MainController.$inject = ['$rootScope', '$scope', '$window'];
  function MainController($rootScope, $scope, $window) {
    
  	var vm = this;
  

    $scope.link = 'http://sportsnomads.com.au/';

    $scope.open = function() {
      cordova.InAppBrowser.open($scope.link,'_system');
      // $window.open($scope.link, '_blank')
     // window.open(encodeURI($scope.link), '_system');

    };
  }

})();
