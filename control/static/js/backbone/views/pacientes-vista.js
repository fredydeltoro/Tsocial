var PacientsView = Backbone.View.extend({
  tagName : 'tbody',
  initialize : function () {
    console.log(this.collection)
    
  },
  render : function () {
    this.collection.each(function(model){
			var pacientView = new PacientView({ model: model })
			this.$el.append(pacientView.el) // adding all the person objects.
		}, this)
  }
})

 var pacientsView = new PacientsView({collection:pacientCollection})
