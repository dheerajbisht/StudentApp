
 /*angular conventional routing using ngRoute*/
/*var clientApp = angular.module('StudentApp',['ngRoute']);

clientApp.config(function($routeProvider){

	$routeProvider.when('/',{
		templateUrl : 'views/home.html',
		controller : 'HomeController'
	})
	.when('/register',{
		templateUrl : 'views/registrationForm.html',
		controller : 'StudentRegistrationController'
	})
	.when('/login',{
		templateUrl : 'views/login.html',
		controller : 'testController'
	});
	

});
*/
/*end of conventional routing*/

var clientApp = angular.module('StudentApp', ['ui.router']);

clientApp.config(function($stateProvider, $urlRouterProvider) {
    
    
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: "/home",
            templateUrl : 'views/home.html',
            controller : 'HomeController'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('Child1', {
            url:"/Child1",
        	templateUrl : "views/test2.html"
        	//controller : 'StudentRegistrationController'
            // we'll get to this in a bit       
        })
        .state('Admit Student',{
            url : "/child2",
            templateUrl : "views/test2.html"
        });
        
        $urlRouterProvider.otherwise('/home');
});

