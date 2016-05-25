app_paciente.controller('pacientPerfil',['$scope','perfil',
function ($scope, perfil) {
  $scope.getPacient = function () {
    perfil.getPacient($scope.id).success(function (data) {
      $scope.paciente = data
      $scope.curp = $scope.paciente.curp
      $scope.nombre = $scope.paciente.nombre
    })
  }
  $scope.getPacient()
  $scope.form = false
  $scope.submit = function () {
    data = {
      'curp' : $scope.curp,
      'nombre' : $scope.nombre
    }
    perfil.putPacient($scope.id, data)
    .success(function (response) {
      $scope.getPacient()
      console.log(response)
    })
    .error(function (response) {
      console.log(response)
    })
  }
}])
