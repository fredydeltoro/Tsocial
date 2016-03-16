$(document).ready(function () {
  $('#paciente').click(function () {
    $('.active').removeClass('active')
    $('.paciente').show()
    $('.datos-paciente').hide()
    $('.domicilio').hide()
    $(this).parent().addClass('active')
  })
  $('#datos').click(function () {
    $('.active').removeClass('active')
    $('.datos-paciente').show()
    $('.paciente').hide()
    $('.domicilio').hide()
    $(this).parent().addClass('active')
  })
  $('#domicilio').click(function () {
    $('.active').removeClass('active')
    $('.domicilio').show()
    $('.paciente').hide()
    $('.datos-paciente').hide()
    $(this).parent().addClass('active')
  })
})
