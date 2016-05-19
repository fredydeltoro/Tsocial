app_paciente.factory('domicilio', ['$http', function($http) {
  var Domicilio = {}
  Domicilio.getPacient = function (id) {
    return $http.get('/api-ts/domicilio/' + id)
              .success(function(data) {
                return data;
              })
              .error(function(err) {
                return err;
              })
  }
  return Domicilio
}])
