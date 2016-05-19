app_paciente.controller('pacientInfo',['$scope','info',
function ($scope, info) {
  info.getPacient($scope.id).success(function (data) {
    $scope.info = data
  })
}])
