/**
 * Created by TJ on 12/11/14.
 */

swadhyay.controller('core.client.login.controller',function($scope,$location){
    $scope.login = function(){
        $location.path('/products');
    }
});
