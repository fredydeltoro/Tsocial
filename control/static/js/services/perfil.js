app_paciente.factory('perfil', ['$http', function($http) {
  var Pacient = {}
  Pacient.getPacient = function (id) {
    return $http.get('/api-ts/perfil/' + id)
              .success(function(data) {
                return data;
              })
              .error(function(err) {
                return err;
              })
  }
  return Pacient
}])
