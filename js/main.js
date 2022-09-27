
  function validaInputs() {

    let tipos = ["TEXT", "NUMBER", "TEL"];
    let inputs = document.getElementsByTagName("input");
  for (let i = 0; i < inputs.length; i++) {
  if (tipos.includes(inputs[i].type.toUpperCase()) && (inputs[i].value === ""))
  document.getElementById(`${inputs[i].name}ERROR`).innerHTML = `${inputs[i].name} está em branco. Tente novamente!`;
}


  if(document.getElementsByName("SEXO").value === ""){
  document.getElementById("SEXOERROR").innerHTML = "SEXO está em branco. Tente novamente!";
}

  if(document.getElementById("checkEstadoCivil").value === ""){
  document.getElementById("ESTADOCIVILERROR").innerHTML = `ESTADO CIVIL está em branco. Tente novamente!`;
}

  if(document.getElementById("idComentario").value === ""){
  document.getElementById("COMENTARIOERROR").innerHTML = `COMENTÁRIO está em branco. Tente novamente!`;
}
}

  function limparErrorMsg(t) {
  document.getElementById(`${t}ERROR`).innerHTML = "";
}
