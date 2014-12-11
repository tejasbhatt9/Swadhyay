/**
 * Created by TJ on 12/11/14.
 */

swadhyay.config(['$routeProvider',function($routeProvider){
    $routeProvider.
        when('/about',{
            templateUrl: 'public/modules/core/views/about.html',
            controller: 'core.client.about.controller'
        }).
        when('/products',{
            templateUrl: 'public/modules/core/views/products.html',
            controller: 'core.client.products.controller'
        }).
        when('/blog',{
            templateUrl: 'public/modules/core/views/blog.html',
            controller: 'core.client.blog.controller'
        }).
        when('/login',{
            templateUrl: 'public/modules/core/views/login.html',
            controller: 'core.client.login.controller'
        }).
        when('/register',{
            templateUrl: 'public/modules/core/views/register.html',
            controller: 'core.client.registration.controller'
        }).
        otherwise({
            redirectTo: '/'
        });
}]);


