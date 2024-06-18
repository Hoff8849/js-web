var pacientes = document.querySelectorAll(".acoes");
 
pacientes.forEach(paciente =>{
    paciente.addEventListener("click", function (event) {
   
    event.target.parentNode.parentNode.parentNode.classList.add("fadeout");
 
    setTimeout(() => {
        event.target.parentNode.remove();
    }, 1000);
 
    })
});






