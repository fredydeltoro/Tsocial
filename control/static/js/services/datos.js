app_paciente.factory('datos', ['$http', function($http) {
  var Datos = {}
  Datos.getPacient = function (id) {
    return $http.get('/api-ts/datos/' + id)
    .success(function(data) {
      return data
    })
    .error(function(err) {
      return err;
    })
  }
  Datos.putPacient = function (id, data) {
    return $http.put('/api-ts/datos/' +id+'/', data)
    .success(function (response) {
        return response.status
      })
      .error(function (response) {
        return response.status
      })
  }
  return Datos
}])
