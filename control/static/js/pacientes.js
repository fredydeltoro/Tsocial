$(document).ready(function() {
  console.log('se cargo bien')
  collection.each(function (model) {
		//Agregando Nuevas Vistas
	var ren = new view({model: model})
  ren.render()
	})

})
