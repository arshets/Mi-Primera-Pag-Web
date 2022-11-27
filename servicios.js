const articulo = document.querySelector("#foo");

function fuu() {
    if (articulo.className === "abierto") {
    
        articulo.className ="";
        button.textContent="";

    }else {
        articulo.className = "abierto";
        button.textContent = "";
    }
}


// Comentarios

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_lmzc19h';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      alert('Mensaje Enviado Correctamente!');
    }, (err) => {
      btn.value = 'Enviar';
      alert(JSON.stringify(err));
    });
});