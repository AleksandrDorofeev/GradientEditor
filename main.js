//upload image
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $('#blah').attr('src', e.target.result);
    }
  reader.readAsDataURL(input.files[0]);
  }
}
$(".imgInp").change(function(){
  readURL(this);
});

//opacity slider
(function() {
  var slider = 1
  var slider2 = 100
  var color = "#91e7db"
  $(".opacity-slider").slider({
    value: 0,
    min: 0,
    max: 1,
    step: 0.01,
    slide: function(e, ui) {
      var overlay
      slider = ui.value
      bg = "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(1,1,1," + slider + ")" + slider2 +"%)"
      $(".overlay").css("background", bg)
      $(".gradient").html(bg);
    }
  })
  
//transition slider
  var slider2 = 100
  $(".transition-slider").slider({
    value: 100,
      min: 0,
      max: 100,
      step: 10,
    slide: function(e, ui) {
      var overlay
      slider2 = ui.value
      bg = "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(1,1,1," + slider + ")" + slider2 +"%)"
        $(".overlay").css("background", bg)
        $(".gradient").html(bg);
    }
  })
}).call(this)
