
const calcular = document.getElementById('calcular');

//nome.value = "Elton Freitas" o ponto é para acessar as propriedades do elemento
//.value so é para input do tipo texto

function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso != '' ) {
            
        const valorIMC = (peso / (altura * altura)).toFixed(1); //TO FIXED PARA ARRENDONDAR P/ 1 CASAS DECIMAIS

        let classificacao = '';

        if (valorIMC < 18.5) {
            classificacao = 'abaixo do peso.'
        } else if (valorIMC < 25) {
            classificacao = 'com peso ideal...para um mago desnutrido!'
        } else if (valorIMC < 50) {
            classificacao = 'rapaz...ta bom, mas pode melhorar.'
        } else if (valorIMC < 80) {
            classificacao = ' engordando neh mermao?, se comer mais engorda.'
        } else if (valorIMC > 100) {
            classificacao = 'gordo pra porra ! vai malhar mizera, para de comer adoidado.'
        } 

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`; //dentro do acento grave da p/ incluir variaveis


    }else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }

}

calcular.addEventListener('click', imc);