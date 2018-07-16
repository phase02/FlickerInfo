routerApp.controller('SampleController', function($scope, $stateParams,userService) {
	
	$scope.customers = [ {
		"name" : "Bottom-Dollar Marketse",
		"city" : "Tsawassen",
		"PhoneNumber" : "(909)090-902",
		"id":1,
		"Description":"Very good awesome brand"
	}, {
		"name" : "Alfreds Futterkiste",
		"city" : "Berlin",
		"PhoneNumber" : "(909)090-901",
		"id":2,
		"Description":"Very good awesome brand"

	}, {
		"name" : "Bon app",
		"city" : "Marseille",
		"PhoneNumber" : "(909)090909",
		"id":3,
		"Description":"Very good awesome brand"

			
	}, {
		"name" : "Cactus Comidas para llevar",
		"city" : "Buenos Aires",
		"PhoneNumber" : "(909)090-9093",
		"id":4,
		"Description":"Very good awesome brand"

	}, {
		"name" : "Bolido Comidas preparadas",
		"city" : "Madrid",
		"PhoneNumber" : "(909)090-9094",
		"id":5,		
		"Description":"Very good awesome brand"

	}, {
		"name" : "Around the Horn",
		"city" : "London",
		"PhoneNumber" : "(909)090-9099",
		"id":6,
		"Description":"Very good awesome brand"

	}, {
		"name" : "B's Beverages",
		"city" : "London",
		"PhoneNumber" : "(909)090-9098",
		"id":7,	
		"Description":"Very good awesome brand"

	} ];
	
	userService.set($scope.customers);
	/*$scope.list = [];
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
	
	for (i in $scope.customers) {
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

	$scope.set = function() {
		$scope.button = true;
		$scope.button1=false;
		
	}
	$scope.set1 = function() {
		$scope.button = false;
		$scope.button1 = true;
		$scope.list=[];
		for (i in $scope.customers) {
			if ($scope.expiration != undefined) {
				if ($scope.customers[i].PhoneNumber.includes($scope.expiration)) {
					
					if($scope.list.indexOf($scope.customers[i])==-1){
						$scope.list.push($scope.customers[i]);
					
					}
				}
			} else if ($scope.name != undefined) {
				if ($scope.customers[i].name.includes($scope.name) || $scope.customers[i].city.includes($scope.name)) {
					if($scope.list.indexOf($scope.customers[i])==-1)
					$scope.list.push($scope.customers[i]);
				}
			}
		}
		
	}*/

});