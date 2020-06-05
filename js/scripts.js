$(document).ready(function() {
  $("form#question").submit(function(event) {
    const gender = $("select#gender").val();

    if (gender === "male") {
      alert("You are male.");
    
    } else {
      alert("You are female.");
    }
  });
  event.preventDefault();
});