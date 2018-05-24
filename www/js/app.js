angular
.module('app', [
  'onsen'
]).config(['$httpProvider', function($httpProvider) {

  $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
  $httpProvider.defaults.headers.put["Content-Type"] = "application/x-www-form-urlencoded";

  $httpProvider.defaults.transformRequest.unshift(function (data, headersGetter) {
    var key, result = [];

    if (typeof data === "string")
      return data;

    for (key in data) {
      if (data.hasOwnProperty(key))
        result.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[key]));
    }
    return result.join("&");
  });

}]).run(['$location', function($location) {
  	
  	// var user = JSON.stringify([{"id": 1, "name" : "angelo" }]);
  	// localStorage.setItem('user', user);
    // console.log(ons.findComponent('ons-sliding-menu')._currentPageUrl);
  	var currentUser = JSON.parse(localStorage.getItem('user'));

    console.log(document.querySelector('ons-navigator').currentPage);
  	if (currentUser)
  	{
      ons.ready(function() {
        document.querySelector('#mainPage').pushPage("home.html");
      });
  	
  	} 
}]);
