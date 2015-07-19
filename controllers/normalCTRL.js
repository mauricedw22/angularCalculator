

app.controller('normalCTRL',function($scope){

$scope.answerArea = true;

$scope.total = 0;

$scope.oper = false;

$scope.answer = function(){
	
	$scope.answerArea = false;

    if($scope.oper==false || Number.isNaN($scope.total)){
		
		alert('Please select a mathematical operation...');
		
	}	
	
};

$scope.useAnswer = function(){
	
	$scope.num1 = ($scope.total).toString();
	
	$scope.answerArea = true;
	
};

$scope.clear = function(){
	
	$scope.num1 = '0';
	$scope.num2 = '0';
    $scope.total = 0;
	
	$scope.oper = false;
	$scope.answerArea = true;
	
};

$scope.add = function(){
	
	$scope.total = parseFloat($scope.num1) + parseFloat($scope.num2);
	
	$scope.oper = true;
	
};

$scope.subtract = function(){
	
	$scope.total = parseFloat($scope.num1) - parseFloat($scope.num2);
	
	$scope.oper = true;
	
};

$scope.multiply = function(){
	
	$scope.total = parseFloat($scope.num1) * parseFloat($scope.num2);
	
	$scope.oper = true;
	
};

$scope.divide = function(){
	
	$scope.total = parseFloat($scope.num1) / parseFloat($scope.num2);
	
	$scope.oper = true;
	
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