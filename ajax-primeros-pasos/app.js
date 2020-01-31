const cargarBtn = document.querySelector("#cargar");
cargarBtn.addEventListener("click", cargarDatos);

function cargarDatos(){
   // Crea una conexión XMLHttpRequest
   const xhr = new XMLHttpRequest();

   // Abre la conexión
   xhr.open("GET", "datos.txt", "true");  // (método, url, async)

   // Cuándo la conexión termina de cargar
   xhr.onload = function(){
      /* this.status
         500 - 599: Un error en el servidor
         400 - 499: Error en el cliente (Ex: 404 page not found)
         300 - 399: Existe una redirección de url
         200 - 299: Todo está bien, es correcto
         100 - 199: Mensaje informativo */
      
      if(this.status === 200){
         const div = document.querySelector("#listado");
         div.innerHTML = `<h1>${this.responseText}</h1>`;
      }
   }

   // Envía la petición (request)
   xhr.send();
}
