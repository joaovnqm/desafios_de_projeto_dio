//Realizando desafio de projeto da DIO: Escrevendo as Classes de um Jogo
//Criando a classe herói
class heroi {
    //Criando o construtor do herói
    constructor (nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        if (this.tipo === "Mago") {
            this.ataque = "Magia"
            return this.ataque
        } else if (this.tipo === "Guerreiro") {
            this.ataque = "Espada"
            return this.ataque
        } else if (this.tipo === "Monge") {
            this.ataque = "Artes Marciais"
            return this.ataque
        } else if (this.tipo === "Ninja") {
            this.ataque = "Shuriken"
            return this.ataque
        }
    }
    //Criando o método atacar
    atacar () {
        if (this.tipo === "Mago") {
            console.log("O " + this.tipo + " atacou usando " + this.ataque)
        } else if (this.tipo === "Guerreiro") {
            console.log("O " + this.tipo + " atacou usando " + this.ataque)
        } else if (this.tipo === "Monge") {
            console.log("O " + this.tipo + " atacou usando " + this.ataque)
        } else if (this.tipo === "Ninja") {
            console.log("O " + this.tipo + " atacou usando " + this.ataque)
        }
    }
}

//Criando os heróis
let heroi1 = new heroi("Gandalf", 2019, "Mago");
let heroi2 = new heroi("Conan", 35, "Guerreiro");
let heroi3 = new heroi("Shifu", 34, "Monge");
let heroi4 = new heroi("Naruto", 17, "Ninja");

//Chamando o método atacar para cada herói
heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();

//Fim do desafio. Obrigado pela atenção.