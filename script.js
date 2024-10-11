// Carne - 400 gr por pessoa   + de 6 horas - 650
// Cerveja - 1200 ml por Pessoa + 6 horas - 2000 ml
// Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500ml

// Crianças valem por 0,5

let inputAdultos = document.getElementById("Adultos");
let inputCriancas = document.getElementById("Criancas");
let inputDuracao = document.getElementById("Duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    console.log("Calculando...");
    let Adultos = inputAdultos.value;
    let Criancas = inputCriancas.value;
    let Duracao = inputDuracao.value;
    let qdtTotalCarne = carnePP(Duracao) * Adultos + (carnePP(Duracao)/2 * Criancas);
    let qdtTotalCerveja = cervejaPP(Duracao) * Adultos;
    let qdtTotalBebidas = bebidasPP(Duracao) * Adultos + (bebidasPP(Duracao)/2 * Criancas);


    resultado.innerHTML = `<p>${qdtTotalCarne/1000} Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja/355)} Latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebidas/2000)} Pet's 2l de Bebidas</p>`
}

function carnePP(Duracao){
    if(Duracao >= 6){
     return 650;   
    }
    else{
        return 400;
    }
}
function cervejaPP(Duracao){
    if(Duracao >= 6){
     return 2000;   
    }
    else{
        return 1200;
    }
}
function bebidasPP(Duracao){
    if(Duracao >= 6){
     return 1500;   
    }
    else{
        return 1000;
    }
}

