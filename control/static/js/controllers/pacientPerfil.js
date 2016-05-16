app_paciente.controller('pacientPerfil',['$scope','perfil',
function ($scope, perfil) {
  perfil.getPacient($scope.id).success(function (data) {
    $scope.paciente = data
  })
}])
