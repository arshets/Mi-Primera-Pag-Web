const mostrarReloj = ()=>{
    let fecha = new Date();
    let hr = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let seg = formatoHora(fecha.getSeconds());
    document.getElementById('hora').innerHTML = `${hr}:${min}:${seg}`;

    const meses = ['Ene', 'Feb', 'Mar','Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const dias = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    let fechaTexto = `${diaSemana}, ${dia} ${mes}`;
    document.getElementById('fecha').innerHTML = fechaTexto;

    document.getElementById('contenedor').classList.toggle('animar');
}

const formatoHora = (hora)=>{
    if(hora < 10)
        hora = '0' + hora;
    return hora;    
}

setInterval(mostrarReloj, 1000);

const images = document.querySelector(".images")
const imagesCollection = document.querySelectorAll(".image")
const prevBtn = document.querySelector(".prev")
const nextBtn = document.querySelector(".next")

prevBtn.addEventListener("click", prevSlide)
nextBtn.addEventListener("click", nextSlide)


let index = 0

let interval = setInterval(startInterval, 5000)

function startInterval() {
    index++
    moveCarousel()
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(startInterval, 100)
}

function moveCarousel() {
  
    if (index > imagesCollection.length -1) {
        index = 0
    } else if (index < 0) {
        index = imagesCollection.length -1
    }

    images.style.transform = `translateX(-${index * 400}px)`
}


function prevSlide() {
    index--
   
    clearInterval(interval) 
    moveCarousel()
}

function nextSlide() {
    index++
   
    clearInterval(interval) 
    moveCarousel()
}

