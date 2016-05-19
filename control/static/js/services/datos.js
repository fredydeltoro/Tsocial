app_paciente.factory('datos', ['$http', function($http) {
  var Datos = {}
  Datos.getPacient = function (id) {
    return $http.get('/api-ts/datos/' + id)
              .success(function(data) {
                return data;
              })
              .error(function(err) {
                return err;
              })
  }
  return Datos
}])
