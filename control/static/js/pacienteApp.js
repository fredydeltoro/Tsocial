app_paciente = angular.module('pacientApp',['ngRoute'])

app_paciente.config(function ($routeProvider, $locationProvider) {
  $routeProvider
  .when('/paciente/012479/settings/',{
    controller : 'pacientController',
    templateUrl : 'views/settings.html'
  })
  .otherwise({
      redirectTo: '/'
    })
  /*$locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  })*/
})

/*angular.min.js:117 RangeError: Maximum call stack size exceeded
    at String.replace (native)
    at cb (http://localhost:8000/static/js/vendor/angular.min.js:29:523)
    at xa (http://localhost:8000/static/js/vendor/angular.min.js:87:188)
    at x (http://localhost:8000/static/js/vendor/angular.min.js:60:1)
    at s (http://localhost:8000/static/js/vendor/angular.min.js:58:402)
    at s (http://localhost:8000/static/js/vendor/angular.min.js:59:55)
    at s (http://localhost:8000/static/js/vendor/angular.min.js:59:55)
    at s (http://localhost:8000/static/js/vendor/angular.min.js:59:55)
    at s (http://localhost:8000/static/js/vendor/angular.min.js:59:55)
    at s (http://localhost:8000/static/js/vendor/angular.min.js:59:55) <div ng-view="" class="ng-scope">*/
