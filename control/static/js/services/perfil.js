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
  Pacient.putPacient = function (id, data) {
    return $http.put('/api-ts/perfil/' +id+'/', data)
    .success(function (response) {
        return response.status
      })
      .error(function (response) {
        return response.status
      })
  }
  return Pacient
}])
