

app.controller('quadCTRL', function($scope){
	
 $scope.answerArea = true;	

 $scope.a = '0';
 
 $scope.b = '0';
 
 $scope.c = '0';
 
 $scope.x1 = 0;
 
 $scope.x2 = 0;
 
 $scope.answer = function(){
	 
	$scope.answerArea = false; 
	
	if($scope.a=='0'){
		
		alert('A=0; Not a Quadratic Equation!');
		exit();
		
	}
	 
	$scope.x1 = (-parseFloat($scope.b) + Math.sqrt((Math.pow(parseFloat($scope.b),2) - (4*parseFloat($scope.a)*parseFloat($scope.c)))))/(2*parseFloat($scope.a));

    $scope.x2 = (-parseFloat($scope.b) - Math.sqrt((Math.pow(parseFloat($scope.b),2) - (4*parseFloat($scope.a)*parseFloat($scope.c)))))/(2*parseFloat($scope.a));  	
	 
 };
 
 $scope.clear = function(){
	 
	 $scope.a = '0';
	 
	 $scope.b = '0';
	 
	 $scope.c = '0';
	 
 };


});