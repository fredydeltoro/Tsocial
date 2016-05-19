app_paciente.controller('pacientDomicilio',['$scope','domicilio',
function ($scope, domicilio) {
  domicilio.getPacient($scope.id).success(function (data) {
    $scope.domicilio = data
  })
}])
