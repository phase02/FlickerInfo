routerApp.controller('loginControl', function($scope,$q,$http, $state,userService) {
	 var REST_SERVICE_URI = 'http://localhost:8443/Test/';
	$scope.userForm=[];
	$scope.userForm.user={id:null,username:'',address:'',email:''};
	$scope.message=" ";
	$scope.fetchUser = function(){
		alert("Dc");
		$state.go('about');
		$http.get(REST_SERVICE_URI+"user").then(function(response){
			$scope.userForm=response.data;
			alert($scope.userForm);	
		},function(errRes){
			$scope.message='Server unavailable';
		});
	}
	
	$scope.reset = function() {
        $scope.username = null;
        $scope.password = null;
      };
	
});