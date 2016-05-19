app_paciente.controller('pacientDatos',['$scope','datos',
function ($scope, datos) {
  datos.getPacient($scope.id).success(function (data) {
    $scope.datos = data
  })
}])
