var myApp = angular.module('myApp',[]);

myApp.controller('Hello',['$scope',function($scope, $http) {
    $http.get('/api-ts/pacientes/').
        success(function(data) {
            $scope.greeting = data
        })
}])
