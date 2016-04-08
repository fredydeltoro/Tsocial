var view = Backbone.View.extend({
  events : {
    'click .btn-expediente' : function (e) {
      this.test(e,{row : 'paciente__expediente'})
    },
    'click .btn-nombre' : function (e) {
      this.orderby_({row : 'paciente__nombre'},e)
    },
    'click .btn-fecha' : function (e) {
      this.orderby_({row : 'fecha_internado'},e)
    }
  },
  initialize : function () {

  },
  test : function (e, data) {
    e.preventDefault()
    $(this).off('click')
    alert('first click ' + data.row)
    $(e.currentTarget).click(
      function() {
        alert('second click ' + data.row)
      }
    )
  },
  orderby_ : function (data, e) {
    e.preventDefault()
    var new_oreder = pacientsView.collection.sortBy(data.row)
    pacientsView.collection.models = new_oreder
    $('.table-pacients tbody tr').remove()
    pacientsView.render()
    $('.table-pacients').append(pacientsView.el)
  },
  el :$('body'),

})

Pacientes.Views.App = new view()
