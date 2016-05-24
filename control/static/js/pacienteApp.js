app_paciente = angular.module('pacientApp',['ui.router'])

app_paciente.config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
  $httpProvider.defaults.xsrfCookieName = 'csrftoken';
  $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
  var location = window.location.pathname
  var x = String(location.split('/')[2])
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
    controller : 'pacientDatos'
  })
  .state('Domicilio',{
    url : '/paciente/:id/domicilio/',
    templateUrl : '../../../static/views/domicilio.html',
    controller : 'pacientDomicilio'
  })
  .state('Info',{
    url : '/paciente/:id/info/',
    templateUrl : '../../../static/views/info.html',
    controller : 'pacientInfo'
  })
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  })

})
