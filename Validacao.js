function validateForm() {
  var x = document.forms["cadastro"]["nome"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}