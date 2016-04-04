var view = Backbone.View.extend({
  'events' : {
    'click .btn-expediente' : 'algo'
  },
  algo : function (e) {
    e.preventDefault()
    alert('a huevo')
  },
  el :$('body'),

})

Pacientes.Views.App = new view()
