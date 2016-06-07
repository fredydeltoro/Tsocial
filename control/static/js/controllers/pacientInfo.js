app_paciente.controller('pacientInfo',['$scope','info',
function ($scope, info) {
  $scope.getInfo = function () {
    info.getPacient($scope.id).success(function (data) {
      $scope.info = data
      $scope.fecha_internado = $scope.info.fecha_internado
      $scope.diagnostico_ingreso = $scope.info.diagnostico_ingreso
      $scope.estado_Salud = $scope.info.estado_Salud
      $scope.servicios = $scope.info.servicios
      $scope.cama = $scope.info.cama
    })
  }
  $scope.getInfo()
  $scope.update_info = function (e) {
    e.preventDefault()
    data = {
      'fecha_internado' : $scope.fecha_internado,
      'diagnostico_ingreso' : $scope.diagnostico_ingreso,
      'estado_Salud' : $scope.estado_Salud,
      'servicios' : $scope.servicios,
      'cama' : $scope.cama
    }
    info.putPacient($scope.id, data)
    .success(function (response) {
      $scope.getInfo()
      $scope.form = false
      console.log(response)
    })
    .error(function (response) {
      console.log(response)
    })
  }
}])
