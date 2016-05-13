app_paciente = angular.module('pacientApp',['ui.router'])

app_paciente.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/paciente/{id:int}/perfil/')
  $stateProvider
  .state('Perfil',{
    url : '/paciente/{id:int}/perfil/',
    templateUrl : '../../../static/views/perfil.html',
    controller : 'pacientPerfil'
  })
  .state('Datos',{
    url : '/paciente/{id:int}/datos/',
    templateUrl : '../../../static/views/datos.html',
    controller : 'pacientPerfil'
  })
  .state('Domicilio',{
    url : '/paciente/{id:int}/domicilio/',
    templateUrl : '../../../static/views/domicilio.html',
    controller : 'pacientPerfil'
  })
  .state('Info',{
    url : '/paciente/{id:int}/info/',
    templateUrl : '../../../static/views/info.html',
    controller : 'pacientPerfil'
  })
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  })

})
