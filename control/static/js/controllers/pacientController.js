app_paciente.controller('pacientController',['$scope','$route', '$routeParams', '$location',
function ($scope,$route, $routeParams, $location) {
  $scope.$location = $location
  console.log($location.path())
}])
