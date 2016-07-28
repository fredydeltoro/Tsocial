app_paciente.controller('pacientController',['$scope','$location','perfil',
function ($scope, $location, perfil) {
  var location = $location.path()
  $scope.id = String(location.split('/')[2])
  $scope.tab = String(location.split('/')[3])
  $scope.getPacient = function () {
    perfil.getPacient($scope.id, 'perfil').success(function (data) {
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
}])
