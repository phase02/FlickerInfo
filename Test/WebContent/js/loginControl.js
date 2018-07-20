routerApp.controller('loginControl', function($scope, $q, $rootScope, $http,
		$state, userService) {
	var REST_SERVICE_URI = 'http://localhost:8443/Test/';
	$scope.userForm = [];
	$scope.userForm.user = {
		id : null,
		username : '',
		address : '',
		email : ''
	};
	$scope.message = " ";
	$scope.fetchUser = function() {
		$http.get(
				"https://jsonplaceholder.typicode.com/users?username="+ $scope.username).then(function(response) {
			if (response.data.length == 0) {
				$scope.message = 'Username or Password entered is not right';
			} else {
				$rootScope.logedin = true;
				userService.set(response.data[0]);
				$rootScope.userName =response.data[0].username;
				$state.go('about');
				
			}
		}, function(errRes) {
			
			$scope.message = 'Server unavailable';
		});
		
	}

	$scope.reset = function() {
		$scope.username = null;
		$scope.password = null;
	};

});