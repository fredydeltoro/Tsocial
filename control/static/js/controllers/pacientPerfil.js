app_paciente.controller('pacientPerfil',['$scope','perfil',
function ($scope, perfil) {
  $scope.getPacient = function () {
    perfil.getPacient($scope.id).success(function (data) {
      $scope.paciente = data
      $scope.curp = $scope.paciente.curp
      $scope.nombre = $scope.paciente.nombre
      $scope.apaterno = $scope.paciente.apaterno
      $scope.amaterno = $scope.paciente.amaterno
      $scope.expediente = $scope.paciente.expediente
      $scope.no_afiliacion = $scope.paciente.no_afiliacion
      $scope.sexo = $scope.paciente.sexo
      $scope.fec_nac = $scope.paciente.fec_nac
      $scope.entidad_nac = $scope.paciente.entidad_nac
      $scope.nacionalidad = $scope.paciente.nacionalidad
      $scope.entidad = $scope.paciente.entidad
      $scope.municipio = $scope.paciente.municipio
    })
  }
  $scope.getPacient()
  $scope.form = false
  $scope.submit = function () {
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
