 (function() {
 // create the module and name it disApp
	var disApp = angular.module('disApp', ['ngRoute']);

	// configure our routes
	disApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
            .when('/dismain', {
				templateUrl : 'pages/dissenters/dismain.html',
				controller  : 'dismainController'
			})

			.when('/haggis', {
				templateUrl : 'pages/dissenters/haggis.html',
				controller  : 'haggisController'
			})

			// route for the about page
			.when('/bennett', {
				templateUrl : 'pages/dissenters/bennett.html',
				controller  : 'bennettController'
			})

			// route for the contact page
			.when('/judas', {
				templateUrl : 'pages/dissenters/judas.html',
				controller  : 'judasController'
			});

	});

	// create the controller and inject Angular's $scope
	disApp.controller('dismainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
	});

	disApp.controller('haggisController', function($scope) {
		$scope.message = 'Paul Haggis';
	});

	disApp.controller('bennettController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});
    
    disApp.controller('judasController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});

    disApp.controller('copernicusController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});
    
      disApp.controller('bahaullahController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});
       })();