app_paciente.controller('pacientDomicilio',['$scope','domicilio',
function ($scope, domicilio) {
  $scope.getDomicilio = function () {
    domicilio.getPacient($scope.id).success(function (data) {
      $scope.domicilio = data
      $scope.calle = $scope.domicilio.calle
      $scope.Num_int = $scope.domicilio.Num_int
      $scope.Num_Ext = $scope.domicilio.Num_Ext
      $scope.colonia = $scope.domicilio.colonia
    })
  }
  $scope.getDomicilio()
  $scope.update_domicilio = function (e) {
    e.preventDefault()
    data = {
      'calle' : $scope.calle,
      'Num_int' : $scope.Num_int,
      'Num_Ext' : $scope.Num_Ext,
      'colonia' : $scope.colonia,
    }
    domicilio.putPacient($scope.id, data)
    .success(function (response) {
      $scope.getDomicilio()
      $scope.form = false
      console.log(response)
    })
    .error(function (response) {
      console.log(response)
    })
  }

}])
