app_paciente.controller('pacientPerfil',['$scope','perfil',
function ($scope, perfil) {
  $scope.form = 0
  perfil.getPacient($scope.id).success(function (data) {
    $scope.paciente = data
  })
}])
