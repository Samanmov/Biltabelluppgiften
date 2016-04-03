angular.module('carCars').controller('myController', function($scope) {
	$scope.cars = [
	{
		License:"KD2315",Brand:"Benz", Model:"Mercedes", Year:"2015", 
		editLicense:false, editBrand:false, editModel:false,  editYear:false
	},
	{License:"MD9070",Brand:"Volvo", Model:"S60", Year:"2014",
	 editLicense:false , editBrand:false, editModel:false,  editYear:false
	}
	
	];
	$scope.addCar = function(){
		var create = { License:$scope.License, Brand:$scope.Brand, Model:$scope.Model, Year:$scope.Year, 
					//   editLicense:$scope.false, editBrand:$scope.false, editBrand:$scope.false, editYear:$scope.false
					 };
		$scope.cars.push(create);
		$scope.License = "";
		$scope.Brand = "";
		$scope.Model = "";
		$scope.Year = "";
	//	$scope.editLicense = "";
	//	$scope.editBrand = "";
	//	$scope.editBrand = "";
	//	$scope.editYear = "";	
	}
	$scope.deleteCar = function(d){
		$scope.cars.splice(d,1);
	}
});