function validar(){
    console.log('************validar()***************');


    const mailHardCodeado = 'admin@admin.com';
  const passwordHardCodeado = 'password';

  var obtenerMailForm = document.getElementById('mail').value;
  var obtenerPswForm = document.getElementById('psw').value;
  console.log("Mail Form: " + obtenerMailForm);
  console.log("Psw Form: " + obtenerPswForm);

  if(mailHardCodeado == obtenerMailForm &&
    passwordHardCodeado == obtenerPswForm
   ) {
    alert('Las credenciales son correctas.');
    redireccionar();
   
  } else {
    alert('Las credenciales son incorrectas.');
  }
}

function redireccionar(){
  window.location.href="Respuesta.html";
}



