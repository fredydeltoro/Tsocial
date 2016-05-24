app_paciente.controller('pacientPerfil',['$scope','perfil',
function ($scope, perfil) {
  $scope.form = 0
  $scope.curp = ''
  $scope.submit = function () {
    data = {
      'curp': $scope.curp
    }
    perfil.putPacient($scope.id, data)
    .success(function (response) {
      perfil.getPacient($scope.id).success(function (data) {
        $scope.paciente = data
      })
      console.log(response)
    })
    .error(function (response) {
      console.log(response)
    })
  }
  perfil.getPacient($scope.id).success(function (data) {
    $scope.paciente = data
  })
}])
