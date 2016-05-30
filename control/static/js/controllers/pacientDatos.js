app_paciente.controller('pacientDatos',['$scope','datos',
function ($scope, datos) {
  $scope.getDatos = function () {
    datos.getPacient($scope.id).success(function (data) {
      $scope.datos = data
      $scope.numero_cel = $scope.datos.numero_cel
      $scope.num_tel_casa = $scope.datos.num_tel_casa
      $scope.estado_civil = $scope.datos.estado_civil
      $scope.escolaridad = $scope.datos.escolaridad
      $scope.ocupacion = $scope.datos.ocupacion
      $scope.religion = $scope.datos.religion
      $scope.dialecto = $scope.datos.dialecto
      $scope.grupo_etnico = $scope.datos.grupo_etnico
    })
  }
  $scope.getDatos()
  $scope.update_datos = function (e) {
    e.preventDefault()
    data = {
      'numero_cel' : $scope.numero_cel,
      'num_tel_casa' : $scope.num_tel_casa,
      'estado_civil' : $scope.estado_civil,
      'escolaridad' : $scope.escolaridad,
      'ocupacion' : $scope.ocupacion,
      'religion' : $scope.religion ,
      'grupo_etnico' : $scope.grupo_etnico ,
      'dialecto' : $scope.dialecto
    }
    datos.putPacient($scope.id, data)
    .success(function (response) {
      $scope.getDatos()
      $scope.form = false
      console.log(response)
    })
    .error(function (response) {
      console.log(response)
    })
  }
}])
