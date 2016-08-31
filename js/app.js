var app = angular.module('MonApp', ['ngRoute']);
app.config(function($routeProvider) {

  $routeProvider

    .when('/', { templateUrl: 'partials/home.html',
                 controller: 'PostsCtrl'})

    .when('/charts/:id', { templateUrl: 'partials/charts.html',
                             controller: 'ChartsCtrl'})

    .otherwise({redirectTo : '/'});

});
