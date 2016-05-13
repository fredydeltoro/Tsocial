app_paciente.controller('pacientPerfil',['$scope','$route', '$routeParams', '$location',
function ($scope,$route, $routeParams, $location) {
  $scope.$location = $location
  console.log($location.path())
}])
