/**
 * Created by TJ on 12/11/14.
 */

swadhyay.controller('core.client.registration.controller',function($scope,$location){
    $scope.registration = function(){
        $location.path('/products');
    }
});
