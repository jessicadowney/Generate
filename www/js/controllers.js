 angular.module('app.controllers', [])
  
.controller('createANewWiFiNetworkCtrl', function($scope) {


})


.controller('generatePassword', function($scope) {

  // Set the default value of inputType
  $scope.inputType = 'password';

  $scope.password = '';

$scope.passwords = ["ClementineYeast3910","FunkyCups9421","BlueFunnel9761"];


$scope.generate = function() {

  $scope.inputType = 'text';

  $scope.password = $scope.passwords[Math.floor(Math.random() * $scope.passwords.length)];





  };

$scope.showpw = function() {

	if ($scope.inputType == 'password')
      $scope.inputType = 'text';
    else
      $scope.inputType = 'password';

  };


$scope.change = function() {

	if ($scope.password == null){
		$scope.myForm.networkpw.$setPristine();
   		$scope.myForm.networkpw.$setUntouched();
	}
	
  
  };

function addOptionToArray(optionText) {
  passwords.push({optionText});
} 


})
   


.controller('homeWifi9792CreatedCtrl', function($scope) {

})
 