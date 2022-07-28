
const uri="https://raw.githubusercontent.com/ana-san13/Ana-API/master/";
let genero_seleccionado = null;

//encontrar elementos de html

const el_lista = document.getElementById("generos-musicales");
const el_imagen = document.getElementById("imagen")
const el_titulo = document.querySelector("div#contenido h2")
const el_canciones = document.querySelector("div#contenido h2")

fetch(uri + "datos.json").then(function(response) {
   return response.json();
}).then(function(datos) {
    for(let i = 0; i < datos.length; i+=1) {
      console.log(datos[i]);
        let nuevo_boton = document.createElement("button");
        nuevo_boton.innerHTML += datos[i].nombre;
        el_lista.appendChild(nuevo_boton);
        nuevo_boton.addEventListener("click", function () {
          el_imagen.src = uri + datos[i].imagen;
          el_titulo.innerHTML = datos[i].nombre;
        
          if(datos[i].canciones !=undefined) {
            el_titulo.innerHTML +="\n<h3>Canciones de este genero:</h3><ul>";
            for(let j = 0; j < datos[i].canciones.length; j+=1) {
              el_titulo.innerHTML += "<li>" + datos[i].canciones[j] + "</li>";
            }
            el_titulo.innerHTML  += "</ul>"
          }

          if(genero_seleccionado != null){
            genero_seleccionado.classList.remove("seleccionado")
          }
          genero_seleccionado = nuevo_boton;
          nuevo_boton.classList.add("seleccionado");
    });   

    if(i == 0){
        nuevo_boton.click();
    }
  }
}).catch(function(error) {
    console.log(error)
})