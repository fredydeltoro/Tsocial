app_paciente.controller('pacientController',['$scope','$location',
function ($scope, $location) {
  var location = $location.path()
  $scope.id = String(location.split('/')[2])
  $scope.tab = String(location.split('/')[3])
  console.log($scope.tab)
}])
