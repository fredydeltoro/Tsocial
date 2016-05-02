
app_pacientes.factory('pacients', ['$http', function($http) {
  return $http.get('/api-ts/pacientes/')
            .success(function(data) {
              return data;
            })
            .error(function(err) {
              return err;
            })
}])
