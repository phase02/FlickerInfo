routerApp.controller("SampleController1",function($scope,$stateParams,userService){
	var customers=[];
	var customers=userService.get();
	var name=$stateParams.listId;
	$scope.description=$stateParams.description;
	
	
	$scope.list = [];
	$scope.$watch('expiration', function(newValue, oldValue) {
		if ($scope.expiration != undefined) {
			if (newValue.length == 1)
				$scope.expiration = '(' + $scope.expiration;
			else if (newValue.length == 4)
				$scope.expiration = $scope.expiration + ')';
			else if (newValue.length == 8)
				$scope.expiration = $scope.expiration + "-";
		}
	});
	
	/*for (i in $scope.customers) {
		if ($scope.expiration != null) {
			if (i.PhoneNumber == $scope.expiration) {
				$scope.list.push(i);

			}
		} else if ($scope.name != null) {
			if (i.name.includes($scope.name)) {
				$scope.list.push(i);
			}
		}
	}
*/
	$scope.set = function() {
		$scope.button = true;
		$scope.button1=false;
		
	}
	$scope.set1 = function() {
		alert("dcxscsx");
		$scope.button = false;
		$scope.button1 = true;
		$scope.list=[];
		for (i in customers) {
			if ($scope.expiration != undefined) {
				if (customers[i].PhoneNumber.includes($scope.expiration)) {
					
					if($scope.list.indexOf(customers[i])==-1){
						$scope.list.push(customers[i]);
						
					}
				}
			} else if (name != undefined) {
				if (customers[i].name.toUpperCase().includes(name.toUpperCase()) || customers[i].city.toUpperCase().includes(name.toUpperCase())) {
					
					if($scope.list.indexOf(customers[i])==-1)
					$scope.list.push(customers[i]);
				}
			}
		}
		
	}
});