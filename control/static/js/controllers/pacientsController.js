
app_pacientes.controller('pacientsController',['$scope', 'pacients', function ($scope, pacients) {
  $scope.sortType     = 'fecha_internado' // set the default sort type
  $scope.sortReverse  = false  // set the default sort order
  $scope.searchPacient   = ''
  $scope.filters = ''
  pacients.success(function (data) {
    $scope.pacients = data
  })
}])
