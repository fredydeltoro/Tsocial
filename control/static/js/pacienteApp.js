app_paciente = angular.module('pacientApp',['ui.router'])

app_paciente.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
  var x = 123
  $urlRouterProvider.otherwise('/paciente/'+x+'/perfil/')
  $stateProvider
  .state('Perfil',{
    url : '/paciente/:id/perfil/',
    templateUrl : '../../../static/views/perfil.html',
    controller : 'pacientPerfil'
  })
  .state('Datos',{
    url : '/paciente/:id/datos/',
    templateUrl : '../../../static/views/datos.html',
    controller : 'pacientPerfil'
  })
  .state('Domicilio',{
    url : '/paciente/:id/domicilio/',
    templateUrl : '../../../static/views/domicilio.html',
    controller : 'pacientPerfil'
  })
  .state('Info',{
    url : '/paciente/:id/info/',
    templateUrl : '../../../static/views/info.html',
    controller : 'pacientPerfil'
  })
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  })

})
