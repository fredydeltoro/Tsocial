$(document).ready(function() {
  console.log('se cargo bien')
 pacientsView.render()
 $('.table-pacients').append(pacientsView.el)
 $(".dropdown-menu li a").click(function(){

      $(".btn-filter:first-child .filter_tag").text($(this).text());

   })
})
