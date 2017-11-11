	// create the module and name it scotchApp
	var scotchApp = angular.module('scotchApp', ['ngRoute']);
    
        // configure our routes
        scotchApp.config(function($routeProvider) {
            $routeProvider
    
                // route for the home page
                .when('/', {
                    templateUrl : 'pages/home.html',
                    controller  : 'mainController'
                })
    
                // route for the about page
                .when('/myfavoritedog', {
                    templateUrl : 'pages/myfavoritedog.html',
                    controller  : 'myfavoritedogController'
                })
    
                // route for the contact page
                .when('/weatherinfo', {
                    templateUrl : 'pages/weatherinfo.html',
                    controller  : 'weatherinfoController'
                });
        });
    
        // create the controller and inject Angular's $scope
        scotchApp.controller('mainController', function($scope) {
            // create a message to display in our view
            //$scope.message = 'Everyone come and see how good I look!';
        });
    
        scotchApp.controller('myfavoritedogController', function($scope) {
            //$scope.message = 'Look! I am an about page.';
        });
    
        scotchApp.controller('weatherinfoController', function($scope) {
            //$scope.message = 'Contact us! JK. This is just a demo.';
        });

        scotchApp.controller('GetIP', function($scope, $http){
            $http.get('http://ipinfo.io/json'). 
            success(function(data) { 
              $scope.location = data;
              $scope.ip = data.ip;
           });
        });

        scotchApp.controller('GetRandomDog', function($scope, $http){
            $scope.click = function(){
                $http.get('https://dog.ceo/api/breed/hound/images/random').
                success(function(data){
                    $scope.picture = data.message;
                });
            }
        });

        scotchApp.controller('GetAirVisualAPI', function($scope, $http){
            $http.get('http://api.airvisual.com/v2/nearest_city?key=v5oq6Ggb4m6NCYv7v').
            success(function(data){
                $scope.city = data.data.city;
                $scope.state = data.data.state;
                $scope.temp = data.data.current.weather.tp * 9/5 + 32;
                $scope.humidity = data.data.current.weather.hu;
            });
        });
       

 