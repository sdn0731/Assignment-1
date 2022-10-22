// Form Information Checker
function validateForm() {
  // Initialize and assign variables
  let x = document.forms["form"]["username"].value;
  let y = document.forms["form"]["password"].value;
  let z = document.forms["form"]["rpassword"].value;

  // Create array of active usernames
  var usernames = ["Harry", "Elizabeth", "Shana"];
  
  // Check whether desired username is taken
  for (let i = 0; i < usernames.length; i++) {
    if (x == usernames[i]) {
      alert("Username is taken.");
      return false;
    }
  }
  
  // Check whether passwords match
  if (y != z) {
    alert("Passwords must match.");
    return false;
  }
}

// Create canvas
var canvas = document.getElementById("mycanvas");

// Display canvas
if (canvas.getContext) {
  // Establish object type (2d)
  var text = canvas.getContext("2d");

  // Establish and alter text 1
  text.textAlign = "center";
  text.font = "Bold 25px Arial";
  text.fillText("Drink coffee!",100,100);
} else {
    // Establish alternative text
    alert("Canvas is unsupported by your browser.");
}