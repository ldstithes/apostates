	(function() {
    // create the module and name it apostApp
	var apostApp = angular.module('apostApp', ['ngRoute']);

	// configure our routes
	apostApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/ap-quotes.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/killed', {
				templateUrl : 'pages/killed.html',
				controller  : 'killedController'
			})

			// route for the contact page
			.when('/dissenters', {
				templateUrl : 'pages/dissenters.html',
				controller  : 'dissentersController'
			});
	});

	// create the controller and inject Angular's $scope
	apostApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
	});

	apostApp.controller('killedController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	apostApp.controller('dissentersController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});
    })();