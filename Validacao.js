/*function verificarNome() {
  if(document.form.nome.value == ""){
  alert("Nome não foi preenchido");
  }
}
function verificarNome() {
  var nome = document.getElementById("nome");
  if (document.form.nome.value == "") {
      alert("Nome não foi preenchido");
  }
}*/
function verificarNome(){
  var x = document.forms["form"]["nome"].value;
  if (x == "") {
    alert("Nome não foi preenchido");
    return false;
  }
}

function verificarSenha(){
  if (document.forms.senha1.value == document.forms.senha2.value){
    alert ("Senhas são iguais")
  }
  else{
    alert ("Senha são diferentes")
  }
}

/*function verificarEmail(){
  if(form.email.value.indexOf("@") == -1 ||
      form.email.valueOf.indexOf(".") == -1 ||
      form.email.value == "" ||
      form.email.value == null) {
        alert("Por favor, indique um e-mail válido.");
        //form.email.focus();
        return false;
    }
}*/

