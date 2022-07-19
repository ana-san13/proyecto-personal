
const URL="https://raw.githubusercontent.com/ana-san13/Ana-API/master/datos.json";
let genero_seleccionado = null;


const el_lista = document.getElementById("generos-musicales");
const el_imagen = document.getElementById("imagen-del-genero")
const el_titulo = document.querySelector("div#contenido h2")

fetch(URL).then(function(response) {
   return response.json();
}).then(function(datos) {
    for(let i = 0; i < datos.length; i+=1); {
        let nuevo_boton = document.createElement("button");
        nuevo_boton.innerHTML += datos[i].nombre;
        el_lista.appendChild(nuevo_boton);
        nuevo_boton.addEventListener("click", function () {
          el_imagen.src = URL + datos[i].imagen;
          el_titulo.innerHTML = datos[i].nombre;
          if(genero_seleccionado != null){
            genero_seleccionado.classList.remove("seleccionado")
          }
          genero_seleccionado = nuevo_boton;
          nuevo_boton.classList.add("seleccionado");
    });   

    if(i == 0){
        nuevo_boton.click();
    }
    {

    }).catch(function(error) {
    console.log(error)
})