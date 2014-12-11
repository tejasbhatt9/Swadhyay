/**
 * Created by TJ on 12/11/14.
 */
var swadhyay = angular.module('Swadhyay',['ngRoute']);

swadhyay.config(['$routeProvider',function($routeProvider){
    $routeProvider.
        when('/about',{
            templateUrl: 'public/modules/core/views/about.html'
        }).
        when('/products',{
            templateUrl: 'public/modules/core/views/products.html'
        }).
        when('/blog',{
            templateUrl: 'public/modules/core/views/blog.html'
        }).
        when('/login',{
            templateUrl: 'public/modules/core/views/login.html'
        }).
        when('/register',{
            templateUrl: 'public/modules/core/views/register.html'
        }).
        otherwise({
            redirectTo: '/'
        });
}]);


