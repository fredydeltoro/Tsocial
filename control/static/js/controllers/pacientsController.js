
app_pacientes.controller('pacientsController',['$scope', 'pacients', function ($scope, pacients) {
  $scope.sortType     = 'fecha_internado' // set the default sort type
  $scope.sortReverse  = false  // set the default sort order
  $scope.searchPacient   = '' //ng-model de input de busqueda paciente
  $scope.filters = ''         // filtros de los servicios
  $scope.order_by = function (e, type) {
    //preventDefault es para evitar el comportamiento por defecto de los botones o links
    e.preventDefault()
    $scope.sortType = type
    $scope.sortReverse = !$scope.sortReverse
  }
  $scope.showPacient = function (pacient) {
    //cambiar la url cuando das click en el tr de la tabla
    window.location = '/paciente/' + pacient + '/perfil/'
  }
  /*
  obtener las lista de pacientes del api rest
  con el app factory pacients contruido en el archivo
  control/static/js/services/pacients.js
   */
  pacients.success(function (data) {
    $scope.pacients = data
  })
}])
