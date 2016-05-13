app_paciente.controller('pacientController',['$scope','$location',
function ($scope, $location) {
  $scope.tab = 1
  var location = $location.path()
  $scope.id = location.split('/')[2]
  console.log($scope.id)
}])
