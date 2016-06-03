$(document).ready(function() {
  $("form#vacation").submit(function(event){

    var budget = parseInt($("input#budget").val());

    var climate = parseInt($("#climate").val());

    var cityNature = parseInt($("#cityNature").val());

    var proximity = parseInt($("#proximity").val());

    var activities = parseInt($("activities").val());

    var energyLevel = parseInt($("energyLevel").val());

    if (climate === 1 && cityNature === 2 && proximity === 2) {
      $('#alaska').show();
      $('#coast').hide();
      $('#nyc').hide();
      $('#df').hide();
      $('#yelapa').hide();
      $('#europe').hide();
      $('#everglades').hide();
    } else if (climate === 1 && cityNature ===2 && proximity === 1) {
      $('#coast').show();
      $('#alaska').hide();
      $('#nyc').hide();
      $('#df').hide();
      $('#yelapa').hide();
      $('#europe').hide();
      $('#everglades').hide();
    } else if (cityNature === 1 && proximity === 2 && energyLevel === 2) {
      $('#nyc').show();
      $('#alaska').hide();
      $('#coast').hide();
      $('#df').hide();
      $('#yelapa').hide();
      $('#europe').hide();
      $('#everglades').hide();
    } else {
      (animal === 3)
      $('#spider').show();
      $('#snake').hide();
      $('#turtle').hide();
    }

    event.preventDefault();


  });
});
