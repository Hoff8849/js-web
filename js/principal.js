var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";
 
var titulo = document.querySelector("title");
titulo.textContent = "Aparecida Nutricionista";
 
var pacientes = document.querySelectorAll(".paciente");//tr
 
// +-
for (let i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];
 
    var tdPeso = paciente.querySelector(".info-peso");//td da tr
    var peso = tdPeso.textContent;//valor td
 
    var tdAltura = paciente.querySelector(".info-altura");//td da tr
    var altura = tdAltura.textContent;//valor td
 
    var imc = calculaImc(peso, altura);
 
    var tdImc = paciente.querySelector(".info-imc");
 
    tdImc.textContent = imc;
 
}
function calculaImc(peso, altura) {
    var imc = 0;
 
    imc = peso / (Math.pow(altura, 2));
 
    return imc.toFixed(2);
}
 