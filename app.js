var app = angular.module('carCars', []);

app.controller('myController', function($scope) {
    $scope.one = true;
	$scope.two = false;
	
	
	$scope.cars = [
	{License:"KD2315", Brand:"Benz", Model:"Mercedes", Year:"2015"},
	{License:"MD9070", Brand:"Volvo", Model:"S60", Year:"2014"}
	
	];
	$scope.showTwo = function (){
	  $scope.one = false;
	  $scope.two = true; // now show this one
	 
	  }
	
	$scope.save = function (){
	  $scope.one = true; // now show this one
	  $scope.two = false; 
	 
	  }
	
});

