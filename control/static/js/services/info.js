app_paciente.factory('info', ['$http', function($http) {
  var Info = {}
  Info.getPacient = function (id) {
    return $http.get('/api-ts/info/' + id)
    .success(function(data) {
      return data;
    })
    .error(function(err) {
      return err;
    })
  }
  Info.putPacient = function (id, data) {
    return $http.put('/api-ts/info/' +id+'/', data)
    .success(function (response) {
        return response.status
      })
      .error(function (response) {
        return response.status
      })
  }
  return Info
}])
