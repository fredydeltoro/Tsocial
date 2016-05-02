
app_pacientes.controller('pacientsController',['$scope', 'pacients', function ($scope, pacients) {
  $scope.sortType     = 'fecha_internado'; // set the default sort type
  $scope.sortReverse  = true;  // set the default sort order
  $scope.searchFish   = '';
  pacients.success(function (data) {
    $scope.pacients = data
  })
}])
