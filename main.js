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
      // $(".opacity").html(slider);
      bg = "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(1,1,1," + slider + ")" + slider2 +"%)"
      $(".overlay").css("background", bg)
      $(".gradient").html(bg);
      // bg = "linear-gradient(to bottom," + color + " , rgba(1,1,1," + slider + ")" + slider2 +"%)"
      // bg = "linear-gradient(to bottom, rgba(0, 0, 0, 0) ," + color + "," + slider + ")" + slider2 +"%)"
  // $(".overlay").css("background", bg)
  // (".color").css("color", color);
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
      // $(".transition").html(slider2);
      bg = "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(1,1,1," + slider + ")" + slider2 +"%)"
        $(".overlay").css("background", bg)
        $(".gradient").html(bg);
      // bg = "linear-gradient(to bottom," + color + " , rgba(1,1,1," + slider + ")" + slider2 +"%)"
      // bg = "linear-gradient(to bottom, rgba(0, 0, 0, 0) ," + color + "," + slider + ")" + slider2 +"%)"
  // $(".overlay").css("background", bg)
  // (".color").css("color", color);
    }
  })

 //color change
 //  $(".color").keyup(function() {
 //    var overlay
 //    color = $(".color").val(function hexToRgbA(hex){
 //    var c;
 //    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
 //        c= hex.substring(1).split('');
 //        if(c.length== 3){
 //            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
 //        }
 //        c= '0x'+c.join('');
 //        return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',');
 //    }
 //    throw new Error('Bad Hex');
 //  })
 //    bg = "linear-gradient(to bottom, rgba(0, 0, 0, 0) , rgba(1,1,1," + slider + ")" + slider2 +"%)"
 //  // bg = "linear-gradient(to bottom, rgba(0, 0, 0, 0) ," + color +"," + slider + ")" + slider2 +"%)"
 //  $(".overlay").css("background", bg)
 //  (".color").css("color", color);
 // })

}).call(this)
