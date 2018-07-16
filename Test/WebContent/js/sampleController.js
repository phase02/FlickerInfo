routerApp.controller('SampleController', function($scope,$q,$http, $stateParams,userService) {
	 var REST_SERVICE_URI = 'http://localhost:8443/Test/';
	$scope.userForm=[];
	$scope.userForm.user={id:null,username:'',address:'',email:''};
	$scope.message=" ";
	function fetchUser(){
		alert("Dc");
		$http.get(REST_SERVICE_URI+"user").then(function(response){
			$scope.userForm=response.data;
			alert($scope.userForm);	
		},function(errRes){
			$scope.message='Server unavailable';
		});
	}
	
});