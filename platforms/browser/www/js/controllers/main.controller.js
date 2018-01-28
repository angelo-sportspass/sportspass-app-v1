(function() {
  'use strict';

  angular
    .module('app')
    .controller('MainController', MainController);

  /** @ngInject */
  MainController.$inject = ['$rootScope', '$scope', '$window'];
  function MainController($rootScope, $scope, $window) {

  	var vm = this;

    $scope.link = '//sportspass.com.au/';

    $scope.open = function() {
      $window.open($scope.link, '_blank')
    };
  }

})();
