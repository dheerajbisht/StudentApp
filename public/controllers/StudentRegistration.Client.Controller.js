
var StudRegController = clientApp.controller('StudentRegistrationController',function($scope,$http,$location){


	$scope.registerStudent = function(){

		$http.post('/StudentInfo/Register', $scope.StudentInfo).success(function(data){
			 $location.path('/');
		});

	}



});
	
