angular
.module('app', [
  'onsen'
]).config(['$httpProvider', function($httpProvider) {

  delete $httpProvider.defaults.headers.common['X-Requested-With'];

}]).run(['$location', function($location) {
  	
  	// var user = JSON.stringify([{"id": 1, "name" : "angelo" }]);
  	// localStorage.setItem('user', user);

  	var currentUser = JSON.parse(localStorage.getItem('user'));

  	if (currentUser)
  	{
  		console.log(currentUser);
  	} else {
  		console.log('logout');
  	}
}]);
