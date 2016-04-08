var view = Backbone.View.extend({
  events : {
    'click .btn-expediente' : function (e) {
      e.preventDefault()
      this.orderby_({row : 'paciente__expediente'})
    },
    'click .btn-nombre' : function (e) {
      e.preventDefault()
      this.orderby_({row : 'paciente__nombre'})
    },
    'click .btn-fecha' : function (e) {
      e.preventDefault()
      this.orderby_({row : 'fecha_internado'})
    }
  },
  initialize : function () {

  },
  orderby_ : function (data) {
    var new_oreder = pacientsView.collection.sortBy(data.row)
    pacientsView.collection.models = new_oreder
    $('.table-pacients tbody tr').remove()
    pacientsView.render()
    $('.table-pacients').append(pacientsView.el)
  },
  el :$('body'),

})

Pacientes.Views.App = new view()
