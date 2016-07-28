//factory para consumir los recursos de una api rest
app_paciente.factory('perfil', ['$http', function($http) {
  var Pacient = {}
  /*
  construcción de la funcion para obtener la información de la api
  por medio del $http.get
    */
  Pacient.getPacient = function (id, url) {
    return $http.get(`/api-ts/${url}/${id}`)
    .success(function(data) {
      return data;
    })
    .error(function(err) {
      return err;
    })
  }
  /*
  construcción de la funcion para actulizar la información de la api
  por medio del $http.put
    */
  Pacient.putPacient = function (id,url,data) {
    /*
    id = numero de expediente del paciente
    url = pieza de url para generar la dirección correcta del api ejemplo perfil, datos, info
    data = la información que se va a actulizar
    lo que esta dentro de ${} son variables para que funcionen el string debe
    de ser contruido con especificamente este tipo de comillas ``
    */
    return $http.put(`/api-ts/${url}/${id}/`, data)
    /*
    dependiendo de si la actualización se realizo correctamente o no
    returna los distintos status de la aplicación
    */
    .success(function (response) {
        return response.status
      })
      .error(function (response) {
        return response.status
      })
  }
  return Pacient
}])
