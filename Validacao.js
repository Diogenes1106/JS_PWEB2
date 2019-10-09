function validateForm() {
    var x = document.forms["cadastro"]["nome"].value;
    if (x == "") {
      alert("O Nome deve ser preenchido");
      return false;
    }
  }