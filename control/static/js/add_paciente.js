$(document).ready(function () {
  $('#paciente').click(function () {
    $('.paciente').show()
    $('.datos-paciente').hide()
  })
  $('#datos').click(function () {
    $('#paciente').removeClass('active')
    $('.datos-paciente').show()
    $('.paciente').hide()
    $(this).parent().addClass('active')
  })
})
