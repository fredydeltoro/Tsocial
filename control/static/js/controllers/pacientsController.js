
app_pacientes.controller('pacientsController',['$scope', 'pacients', function ($scope, pacients) {
  $scope.sortType     = 'fecha_internado' // set the default sort type
  $scope.sortReverse  = false  // set the default sort order
  $scope.searchPacient   = ''
  $scope.filters = ''
  $scope.order_by = function (e, type) {
    e.preventDefault()
    $scope.sortType = type
    $scope.sortReverse = !$scope.sortReverse
  }
  $scope.showPacient = function (pacient) {
    window.location = '/paciente/' + pacient + '/perfil/'
  }
  $scope.report =  function (e) {
    e.preventDefault()
    html2canvas(document.getElementById('exportthis'), {
               onrendered: function (canvas) {
                   var data = canvas.toDataURL();
                   var docDefinition = {
                       content: [{
                           image: data,
                           width: 500,
                       }]
                   };
                   pdfMake.createPdf(docDefinition).open("Score_Details.pdf");
               }
           });
  }
  pacients.success(function (data) {
    $scope.pacients = data
  })
}])
