$(document).ready(function() {
  var height = parseInt(prompt("How tall are you in inches?"));

  if (height > 60) {
    $('#adultRides').show();
  } else if (height === 60) {
    alert("You can finally ride this! Congratulations!");
    $('#adultRides').show();
  } else {
    $('#kidRides').show();
  }
});
