const boton = document.querySelector("#boton");
const user = document.querySelector("#user")
const pass = document.querySelector("#pass")
const container = document.querySelector(".form-login")
const valid = document.querySelector("#valid");
valid.style.color = "red"

boton.addEventListener("mouseover", () => {
  user.style.borderColor = "rgb(163, 63, 194)"
  pass.style.borderColor = "rgb(163, 63, 194)"
  container.style.borderColor = "rgb(163, 63, 194)"
})

boton.addEventListener("mouseout", () => {
  user.style.borderColor = "rgb(25, 236, 243)"
  pass.style.borderColor = "rgb(25, 236, 243)"
  container.style.borderColor = "rgb(25, 236, 243)"
})
let errores = [null, null];
boton.addEventListener("click", function validacion(e) {
  e.preventDefault();
  valid.style.color = "red"
  if (user.value == "") {
    valid.innerHTML = `*Username esta vacio </br>`
    errores[0] = false;
    return false
  } else if (user.value.length < 2) {
    valid.innerHTML = `*Username muy corto`
    return false
  } else {
    errores[0] = true;
  }
  if (pass.value == "") {
    valid.innerHTML = `*Password esta vacio`
    errores[1] = false;
    return false
  } else {
    errores[1] = true;
  }

  if (errores[0] == true && errores[1] == true) {
    valid.style.color = "green"
    valid.innerHTML = `Correcto`
    return true
  }
})
