app_paciente = angular.module('pacientApp',['ngRoute'])

app_paciente.config(function ($routeProvider, $locationProvider) {
  $routeProvider
  .when('/paciente/012479/perfil/',{
    templateUrl : '../../../static/views/perfil.html',
    controller : 'pacientPerfil'
  })
  .when('/paciente/012479/datos/',{
    templateUrl : '../../../static/views/datos.html',
    controller : 'pacientPerfil'
  })
  .when('/paciente/012479/domicilio/',{
    templateUrl : '../../../static/views/domicilio.html',
    controller : 'pacientPerfil'
  })
  .when('/paciente/012479/info/',{
    templateUrl : '../../../static/views/info.html',
    controller : 'pacientPerfil'
  })
  .otherwise({
    redirectTo : '/paciente/012479/perfil/'
  })

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  })
})
