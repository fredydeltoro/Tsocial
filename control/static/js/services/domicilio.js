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
  Domicilio.putPacient = function (id, data) {
    return $http.put('/api-ts/domicilio/' +id+'/', data)
    .success(function (response) {
        return response.status
      })
      .error(function (response) {
        return response.status
      })
  }
  return Domicilio
}])
