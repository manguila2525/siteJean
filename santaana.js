const nosotros = document.querySelector("#li__nosotros")
const showNosotros = document.querySelector("#showNosotros")
const desplegar = document.querySelector("#desplegar")
const container = document.querySelector(".modal")
const menu = document.querySelector(".menu")
const list = document.querySelector(".list");
nosotros.addEventListener("mouseover", () => {
    showNosotros.style.display = "block"
})

nosotros.addEventListener("mouseout", () => {
    showNosotros.style.display = "none"
})
let showMenu = true;

this.addEventListener("load", () => {
    container.style.display = "grid"
})
// desplegar.addEventListener("click", () => {
//   if(showMenu){
//     menu.style.transition = "block 1s"
//     menu.style.display = "block"
//     list.style.display = "flex"
//     showMenu = false
//   }else{
//     menu.style.display = "none"
//     showMenu = true
//   }
// })

