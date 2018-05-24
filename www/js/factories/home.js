(function () {
  'use strict';

angular
    .module('app')
    .factory('HotOfferSerivice', HotOfferSerivice);

    HotOfferSerivice.$inject = ['$http', 'sportspass'];
    function HotOfferSerivice($http, sportspass) {
      
    	 var service = {};

    	 service.getBannerSearch = function(data) {
           var req;
          if (data.page)
          {
            req = $http.post(sportspass.baseUrl + '/banner/banner-search?search=true&page='+data.page, data);
          } else {

            req = $http.post(sportspass.baseUrl + '/banner/banner-search?search=true', data);
          }

           return req;
         }

    	 return service;
    }
})();