$(document).ready(function() {
  $("form#vacation").submit(function(event){

    //$("#entertain")
    var climate = parseInt($("#climate").val());

    //$("#age")
    var city-nature = parseInt($("#city-nature").val());

    //$("#activity")
    var proximity = parseInt($("#proximity").val());

    var activities = parseInt($("#activities").val());

    var energy-level = parseInt($("#energy-level").val())



    if (climate === 1 && city-nature === 2 && proximity === 2) {
      $('#alaska').show();
      $('#coast').hide();
      $('#gorge').hide();
      $('#crater').hide();
      $('#redwoods').hide();
      $('#nyc').hide();
      $('#df').hide();
      $('#yelapa').hide();
      $('#europe').hide();
      $('#everglades').hide();
    } else if (animal === 2) {
      $('#snake').show();
      $('#turtle').hide();
      $('#spider').hide();
    } else {
      (animal === 3)
      $('#spider').show();
      $('#snake').hide();
      $('#turtle').hide();
    }

    event.preventDefault();
  });
});
