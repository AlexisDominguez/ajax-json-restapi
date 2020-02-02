const btn1 = document.querySelector("#boton1");
btn1.addEventListener("click", cargarEmpleado);

const btn2 = document.querySelector("#boton2");
btn2.addEventListener("click", cargarEmpleados)

function cargarEmpleado(){
   const xhr = new XMLHttpRequest();
   
   xhr.open("GET", "empleado.json", "true");

   xhr.onload = function(){
      if(this.status === 200){
         const empleado = JSON.parse(this.responseText);
         const empleadoDiv = document.querySelector("#empleado");

         empleadoDiv.innerHTML = `
         <ul>
            <li>Id : ${empleado.id}</li>
            <li>Nombre: ${empleado.nombre}</li>
            <li>Empresa: ${empleado.empresa}</li>
            <li>Puesto: ${empleado.puesto}</li>
         </ul>
         `;
      }
   }

   xhr.send();
};

function cargarEmpleados(){
   const xhr = new XMLHttpRequest();

   xhr.open("GET", "empleados.json", true);

   xhr.onload = function(){
      if(this.status === 200){
         const empleados = JSON.parse(this.responseText);

         console.log(empleados);
        
         const empleadosDiv = document.querySelector("#empleados");
         for(let i = 0; i < empleados.length; i++){

            const ul = document.createElement("ul");
            ul.innerHTML = `
               <li>Id: ${empleados[i].id}</li>
               <li>Nombre: ${empleados[i].nombre}</li>
               <li>Empresa: ${empleados[i].empresa}</li>
               <li>Puesto: ${empleados[i].puesto}</li>
            `;

            empleadosDiv.appendChild(ul);
         }
      }
   }

   xhr.send();
}