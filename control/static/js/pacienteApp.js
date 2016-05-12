app_paciente = angular.module('pacientApp',['ngRoute'])

app_paciente.config(function ($routeProvider, $locationProvider) {
  $routeProvider
  .when('/paciente/012479/settings/',{
    templateUrl : '../../../static/views/settings.html',
    controller : 'pacientController'
  })

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  })
})
