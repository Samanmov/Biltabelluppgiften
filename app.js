var app = angular.module('carCars', []);

app.controller('myController', function($scope) {
	$scope.cars = [
	{
		License:"KD2315",Brand:"Benz", Model:"Mercedes", Year:"2015", 
		editLicense:false, editBrand:false, editModel:false,  editYear:false
	},
	{License:"MD9070",Brand:"Volvo", Model:"S60", Year:"2014",
	 editLicense:false , editBrand:false, editModel:false,  editYear:false
	}
	
	];
	
});

