var PacientView = Backbone.View.extend({
  tagName : 'tr',
  initialize : function () {
    this.template =  _.template(String($('#tupla-template').html()))
    this.render()
  },
  render: function(){
    var data = this.model.toJSON()
    var html = this.template(data)
		this.$el.html(html)
	}
})
