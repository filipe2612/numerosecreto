/**function exibirOla(){
     console.log('Olá mundo');
}

exibirOla();

function exibirNome(){
    let nome = 'filipe';
    console.log(`olá ${nome}!`)
}

exibirNome();

function dobroNumero(){
    let numeroDobrar = prompt('digite um número'); 
    resultadoDobro = numeroDobrar * 2;
    console.log(resultadoDobro);
}

dobroNumero();

function mediaTresnumero(){
    let num1 = parseFloat(prompt('digite um número 1'));
    let num2 = parseFloat(prompt('digite um número 2'));
    let num3 = parseFloat(prompt('digite um número 3'));
    media = ((num1 + num2 + num3)/3);
    console.log(media);
}

mediaTresnumero();**/

function numeroMaior(){
    // Solicita ao usuário o primeiro número
    let numero1 = parseFloat(prompt("Digite o primeiro número:"));

// Solicita ao usuário o segundo número
    let numero2 = parseFloat(prompt("Digite o segundo número:"));

// Verifica qual número é maior ou se são iguais
    if (numero1 > numero2) {
        alert(`O maior número é: ${numero1} numero1`);
        } else if (numero2 > numero1) {
        alert(`O maior número é: ${numero2} numero2`);
    } else {
        alert("Os números são iguais!");
    }

}

numeroMaior();