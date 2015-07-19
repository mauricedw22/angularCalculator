
app.controller('expoCTRL', function($scope){

$scope.answerArea = true;

$scope.num1 = '0';

$scope.num2 = '0';

$scope.answer = function(){
	
	$scope.answerArea = false;
	
	$scope.total = Math.pow(parseFloat($scope.num1), parseFloat($scope.num2));
	
};

$scope.clear = function(){
	
	$scope.num1 = '0';
	$scope.num2 = '0';
	$scope.total = 0;
	
	$scope.answerArea = true;
	
};

$scope.useAnswer = function(){
	
	$scope.num1 = $scope.total;
	
};

$scope.pi1 = function(){
	
	$scope.num1 = Math.PI.toString();
	
};

$scope.percent1 = function(){
	
	$scope.num1 = (parseFloat($scope.num1) * .01).toString();
	
};

$scope.pi2 = function(){
	
	$scope.num2 = Math.PI.toString();
	
};

$scope.percent2 = function(){
	
	$scope.num2 = (parseFloat($scope.num2) * .01).toString();
	
};



});