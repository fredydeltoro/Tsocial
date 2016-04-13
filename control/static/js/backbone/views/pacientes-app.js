var view = Backbone.View.extend({
  events : {
    'click .btn-expediente' : function (e) {
      this.orderby_(e,{row : 'paciente__expediente'})
    },
    'click .btn-nombre' : function (e) {
      this.orderby_(e,{row : 'paciente__nombre'})
    },
    'click .btn-fecha' : function (e) {
      this.orderby_(e,{row : 'fecha_internado'})
    },
    'click .btn-cama' : function (e) {
      this.orderby_(e,{row : 'cama'})
    }
  },
  initialize : function () {

  },
  orderby_ : function (e, data) {
    e.preventDefault()
    var button = $(e.currentTarget)
    var new_oreder = pacientsView.collection.sortBy(data.row)
    if (button.hasClass('asc')) {
      pacientsView.collection.models = new_oreder
      $('.table-pacients tbody tr').remove()
      pacientsView.render()
      $('.table-pacients').append(pacientsView.el)
      button.removeClass('asc').addClass('des')
      return ;
    }
    if (button.hasClass('des')) {
      pacientsView.collection.models = new_oreder.reverse()
      $('.table-pacients tbody tr').remove()
      pacientsView.render()
      $('.table-pacients').append(pacientsView.el)
      button.removeClass('des').addClass('asc')
      return ;
    }
  },
  el :$('body'),

})

Pacientes.Views.App = new view()
