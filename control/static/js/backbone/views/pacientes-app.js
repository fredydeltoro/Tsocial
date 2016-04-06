var view = Backbone.View.extend({
  'events' : {
    'click .btn-expediente' : 'orderby_Exp'
  },
  initialize : function () {
    this.template = _.template(String($('#tupla-template').html()))
    this.collection.on('change reset add remove',function () {
      this.render()
  	})
  },
  orderby_Exp : function (e) {
    e.preventDefault()
    e.stopPropagation()
    this.collection.sortBy('paciente__expediente')
  },
  el :$('body'),
  render : function () {
		var data = this.model.toJSON()
		var html = this.template(data)
		this.$el.find('.table-pacients tbody').append(html)
	},

})

Pacientes.Views.App = new view()
