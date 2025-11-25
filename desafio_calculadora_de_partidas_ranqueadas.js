//Realizando desafio de projeto: Calculadora de Partidas Ranqueadas
//Criando a função.
function classificadorPartidas(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let classificacao = "";
    if (saldoVitorias <= 10) {
        classificacao = "Ferro";
    } else if (saldoVitorias <= 20) {
        classificacao = "Bronze";
    } else if (saldoVitorias <= 50) {
        classificacao = "Prata";
    } else if (saldoVitorias <= 80) {
        classificacao = "Ouro";
    } else if (saldoVitorias <= 90) {
        classificacao = "Diamante";
    } else if (saldoVitorias <= 100) {
        classificacao = "Lendário";
    } else {
        classificacao = "Imortal";
    }
    console.log("O Herói tem de saldo de " + saldoVitorias + " e está no nível de " + classificacao + ".");
}

//Chamando a função com os valores determinados de entrada.
classificadorPartidas(85, 20);

//Ao final, aparecerá no console o saldo de vitórias e a classificação do herói.

//Obrigado pela atenção.
