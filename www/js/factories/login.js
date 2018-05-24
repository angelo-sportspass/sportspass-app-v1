(function () {
  'use strict';

angular
    .module('app')
    .factory('LoginService', LoginService);

    LoginService.$inject = ['$http', 'sportspass'];
    function LoginService($http, sportspass) {
      
    	 var service = {};

    	 service.login = function(data){
    	 	return $http.post( sportspass.baseUrl + '/account/login', data);
    	 }

    	 return service;
    }
})();