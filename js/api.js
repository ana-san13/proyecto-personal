
const URL="https://raw.githubusercontent.com/ana-san13/Ana-API/master/datos.json";

const el_lista = document.getElementById("generos-musicales");

fetch(URL).then(function(response) {
   return response.json();
}).then(function(datos) { 
    for(let i = 0; i < datos.length; i+=1); {
        let nuevo_boton = document.createElement("button");
        nuevo_boton.innerHTML += datos[i].nombre;
        el_lista.appendChild(nuevo_boton);
        //el_lista.innerHTML += "<button>" + datos[i].nombre +"</button>"
        }
}).catch(function(error) {
    console.log(error)
})