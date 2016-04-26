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
    },
    'submit form' : 'search',
    'click .clean' : 'clean',
    'click .dropdown-menu li a' : 'filter',
  },
  initialize : function () {

  },
  orderby_ : function (e, data) {
    e.preventDefault()
    var button = $(e.currentTarget)
    var new_oreder = pacientsView.collection.sortBy(data.row)
    if (button.hasClass('asc')) {
      $('.table-pacients tbody tr').remove()
      pacientsView.collection.reset(new_oreder)
      button.removeClass('asc').addClass('des')
      return ;
    }
    if (button.hasClass('des')) {
      $('.table-pacients tbody tr').remove()
      pacientsView.collection.reset(new_oreder.reverse())
      button.removeClass('des').addClass('asc')
      return ;
    }
  },
  search : function (e) {
    e.preventDefault()
    var nom =  $('input[name=nombre]').val()
    var apaterno  = $('input[name=a_paterno]').val()
    var amaterno  = $('input[name=a_materno]').val()
    var x = pacientsView.search(nom, apaterno, amaterno)
    $('.table-pacients tbody tr').remove()
    $('.table-pacients tbody').remove()
    $('.table-pacients').append(temppacientView.el)
    temppacientView.collection.reset(x)
  },
  filter : function (e) {
    e.preventDefault()
    var link = e.currentTarget
    console.log($(link).text())
    var x = pacientsView.filter($(link).text())
    $('.table-pacients tbody tr').remove()
    $('.table-pacients tbody').remove()
    $('.table-pacients').append(temppacientView.el)
    temppacientView.collection.reset(x)
  },
  clean : function (e) {
    e.preventDefault()
    $('.btn-filter .filter_tag').text('Filtrar')
    $('input[name=nombre]').val('')
    $('input[name=a_paterno]').val('')
    $('input[name=a_materno]').val('')
    $('.table-pacients tbody tr').remove()
    $('.table-pacients tbody').remove()
    pacientsView.render()
    $('.table-pacients').append(pacientsView.el)
    temppacientView.collection.reset()

  },

  el :$('body'),

})

Pacientes.Views.App = new view()
