var PacientsView = Backbone.View.extend({
  tagName : 'tbody',
  initialize : function () {
    console.log(this.collection)

  },
  search : function (nom, apat, amat) {
    var renom = new RegExp(`(${nom})`, 'i')
    var reapat = new RegExp(`(${apat})`, 'i')
    var reamat = new RegExp(`(${amat})`, 'i')
    var x = this.collection.models.filter(function(p){
      var obj = p.attributes
      var strnom = obj.paciente__nombre
      var strapat = obj.paciente__apaterno
      var stramat = obj.paciente__amaterno
      var nnom = strnom.search(renom)
      var napat = strapat.search(reapat)
      var namat = stramat.search(reamat)
      if (nom != "" && apat != "" && amat != "") {
        if (nnom > -1 && napat > -1 && namat > -1) {
          return p
        }
      }
    })
    console.log(x)
  },
  render : function () {
    this.collection.each(function(model){
			var pacientView = new PacientView({ model: model })
			this.$el.append(pacientView.el) // adding all the person objects.
		}, this)
  }
})

 var pacientsView = new PacientsView({collection:pacientCollection})
