$(document).ready(function() {
  $("form#questions").submit(function(event) {
    const gender = $("select#gender").val();
    const eyeColor = $("select#eye-color").val();

    if (gender === "male" && eyeColor === "black") {
      alert("Your Celebrity Dating Match is Janet Reno.");
    } else if (gender === "male" && eyeColor === "white") {
      alert("Your Celebrity Dating Match is Nicolas Cage.");
    } else if (gender === "female" && eyeColor === "black") {
      alert("Your Celebrity Dating Match is Gary Busey.");
    } else {
      alert("Your Celebrity Dating Match is Queen Elizabeth II.")
    }

  });
  event.preventDefault();
});