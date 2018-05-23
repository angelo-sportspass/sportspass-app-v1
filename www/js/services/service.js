
(function () {
  'use strict';
    angular
    .module('app')
    .service('sportspass', function(){

    	var vm = this;
    	vm.baseUrl = '//api.dev.local/v1';
    });
})();