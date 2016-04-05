var view = Backbone.View.extend({
  'events' : {
    'click .btn-expediente' : 'algo'
  },
  initialize : function () {
    this.template = _.template('<tr>'+
      '<td>'+
        '<%= paciente__expediente %>'+
      '</td>'+
      '<td>'+
        '<%= paciente__nombre %> <%= paciente__apaterno %>'+
      '</td>'+
      '<td>'+
        '<%= fecha_internado %>'+
      '</td>'+
      '<td>'+
        '<%= cama %>'+
      '</td>'+
    '</tr>')
  },
  algo : function (e) {
    e.preventDefault()
    alert('tovia nell')
  },
  el :$('body'),
  render : function () {
		var data = this.model.toJSON()
		var html = this.template(data)
		this.$el.find('.table-pacients tbody').append(html)
	},

})

Pacientes.Views.App = new view()
