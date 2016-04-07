var view = Backbone.View.extend({
  events : {
    'click .btn-expediente' : 'orderby_Exp'
  },
  initialize : function () {

  },
  orderby_Exp : function (e) {
    e.preventDefault()
    e.stopPropagation()
    var x = pacientsView.collection.sortBy('paciente__expediente')
    pacientsView.collection.models = x
    console.log(x)
    pacientsView.render()
    $('.table-pacients').html(pacientsView.el)
  },
  el :$('body'),
  render : function () {
		/*var data = this.model.toJSON()
		var html = this.template(data)
		this.$el.find('.table-pacients tbody').append(html)*/

	},

})

Pacientes.Views.App = new view()
