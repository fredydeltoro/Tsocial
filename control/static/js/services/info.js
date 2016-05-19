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
  return Info
}])
