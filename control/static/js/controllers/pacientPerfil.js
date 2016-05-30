app_paciente.controller('pacientPerfil',['$scope','perfil',
function ($scope, perfil) {
  $scope.getPacient()
  $scope.form = false
  $scope.update_perfil = function (e) {
    e.preventDefault()
    data = {
      'curp' : $scope.curp,
      'nombre' : $scope.nombre,
      'apaterno' : $scope.apaterno,
      'amaterno' : $scope.amaterno,
      'expediente' : $scope.expediente,
      'no_afiliacion' : $scope.no_afiliacion,
      'sexo' : $scope.sexo,
      'fec_nac' : $scope.fec_nac,
      'entidad_nac' : $scope.entidad_nac,
      'nacionalidad' : $scope.nacionalidad,
      'entidad' : $scope.entidad,
      'municipio' : $scope.municipio
    }
    perfil.putPacient($scope.id, data)
    .success(function (response) {
      $scope.getPacient()
      $scope.form = false
      console.log(response)
    })
    .error(function (response) {
      console.log(response)
    })
  }
}])
