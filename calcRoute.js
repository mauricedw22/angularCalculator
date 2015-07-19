app.config(function($routeProvider){
	
	$routeProvider.when('/normal',{
		templateUrl: 'templates/normal.html',
		controller: 'normalCTRL'		
	}).when('/exponent',{
		templateUrl: 'templates/exponent.html',
		controller: 'expoCTRL'
    }).when('/quadratic',{
		templateUrl: 'templates/quadratic.html',
		controller: 'quadCTRL'
    }).otherwise({ redirectTo: '/normal'});	
	
});