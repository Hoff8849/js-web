var pacientes = document.querySelectorAll("#tabela-pacientes");

pacientes.forEach(paciente =>{
    paciente.addEventListener("dblclick", function (event) {
    
    event.target.parentNode.classList.add("fadeout");

    setTimeout(() => {
        event.target.parentNode.remove();
    }, 1000);

    })
});