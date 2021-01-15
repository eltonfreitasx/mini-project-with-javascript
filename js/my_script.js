
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
            classificacao = 'com peso ideal.Parabéns!!!';
        } else if (valorIMC < 30) {
            classificacao = 'levement acima do peso.';
        } else if (valorIMC < 35) {
            classificacao = 'com obesidade grau I';
        } else if (valorIMC < 40) {
            classificacao = 'com obesidade grau II.';
        } else {
            classificacao = 'com obesidade grau III. Cuidado!!';
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`; //dentro do acento grave da p/ incluir variaveis


    }else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }

}

calcular.addEventListener('click', imc);