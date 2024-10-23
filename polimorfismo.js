// Criando uma classe
    class Animal{
        constructor(nome, cor){
            this.nome = nome
            this.cor = cor
        }
        falar(){
            return `Olá, meu nome é ${this.nome}`
        }
    }
    //Criando uma classe derivada de animal
    class Cachorro extends Animal {
        constructor(nome, cor, raça){
            super(nome, cor)
            this.raça = raça
        }
        latir(){
            return "au, au!"
        }
    }
    //Criando uma classe derivada de animal
    class Gato extends Animal{
        constructor(nome, cor, raça){
            super(nome, cor)
            this.raça = raça
        }
        miar(){
            return "miau!"
        }
    }
    //Criando uma array de animais
    const animais = [
        new Cachorro("Rex", "Marrom", "Pastor Alemão"),
        new Gato("Mia", "Preto", "Siames")
    ]
    //Percorrendo o array imprimindo o nome e a cor de cada animal
    for(const animal of animais){
        console.log(`O animal ${animal.nome} é ${animal.cor}`);
    }
    // Chamando o método "latir()" em cada animal
    for(const animal of animais){
       console.log(animal.falar())
    }
    //Chamando o método "latir()" no cachorro
    const cachorro = animais[0]
    console.log(cachorro.latir())
    
    //Chamando o método "miau()" no Gato
    const gato = animais[1]
    console.log(gato.miar());