$(document).ready(function () {
  value = ''
  $('#expedient').change(function () {
    value = $(this).val()
    console.log(value)
    $('#change1').attr('value',value)
    $('#change2').attr('value',value)
    $('#change3').attr('value',value)
    $('#change4').attr('value',value)
  }).change()
})
