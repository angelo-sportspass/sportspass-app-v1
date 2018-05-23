(function () {
  'use strict';

angular
    .module('app')
    .factory('RegisterService', RegisterService);

    RegisterService.$inject = ['$http', 'sportspass'];
    function RegisterService($http, sportspass) {
    	 var service = {};

    	 service.register = function(data){
    	 	return $http.post( sportspass.baseUrl + '/user', data);
    	 }

    	 return service;
    }
})();