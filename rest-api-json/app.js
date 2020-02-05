const cargarPostsBtn = document.querySelector("#cargar");
cargarPostsBtn.addEventListener("click", cargarAPI);

function cargarAPI(){
   const xhr = new XMLHttpRequest;

   xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

   xhr.onload = function(){
      if(this.status === 200){
         const div = document.querySelector("#listado");
         const info = JSON.parse(this.responseText);

         for(let i = 0, n = info.length; i<n; i++){
            const ul = document.createElement("ul");
            ul.innerHTML = `
               <li>ID : ${info[i].id}</li>
               <li>Titulo : ${info[i].title}</li>
               <li>Cuerpo : ${info[i].body}</li>
            `;

            div.appendChild(ul);
         }
      }
   }

   xhr.send();
}