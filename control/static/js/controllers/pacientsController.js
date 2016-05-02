
app_pacientes.controller('pacientsController',['$scope', 'pacients', function ($scope, pacients) {
  pacients.success(function (data) {
    $scope.pacients = data
  })
}])
