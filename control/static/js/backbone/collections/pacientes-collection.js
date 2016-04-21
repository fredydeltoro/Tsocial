var PacientCollection = Backbone.Collection.extend({
  model : Pacient
})

var pacientCollection = new PacientCollection(pacientes)
var pacientstempcollection = new PacientCollection()
