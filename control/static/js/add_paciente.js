$(document).ready(function () {
  $('#paciente').click(function () {
    $('.active').removeClass('active')
    $('.paciente').show()
    $('.datos-paciente').hide()
    $('.domicilio').hide()
    $('.info').hide()
    $(this).parent().addClass('active')
  })
  $('#datos').click(function () {
    $('.active').removeClass('active')
    $('.datos-paciente').show()
    $('.paciente').hide()
    $('.domicilio').hide()
    $('.info').hide()
    $(this).parent().addClass('active')
  })
  $('#domicilio').click(function () {
    $('.active').removeClass('active')
    $('.domicilio').show()
    $('.paciente').hide()
    $('.datos-paciente').hide()
    $('.info').hide()
    $(this).parent().addClass('active')
  })
  $('#info').click(function () {
    $('.active').removeClass('active')
    $('.domicilio').hide()
    $('.paciente').hide()
    $('.datos-paciente').hide()
    $('.info').show()
    $(this).parent().addClass('active')
  })
  $("#datetimepicker1").datetimepicker({
     format: "L",
     locale: 'Es',
     showClear: true,
     viewMode: 'years'
  })
})
