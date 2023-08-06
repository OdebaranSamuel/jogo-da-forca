const cabeca = document.querySelector(".cabeca");
const tronco = document.querySelector(".tronco");
const braco = document.querySelectorAll(".braco");
const perna = document.querySelectorAll(".perna");
const enviar = document.querySelector(".submit");
const input = document.querySelector(".letra");

const assunto = ["cidade", "frutas", "linguagens"];

const objPalavra = {
    cidade: [
        "ilheus",
        "sao paulo",
        "brasilia",
        "rio de janeiro",
        "natal",
        "paraty",
    ],
    frutas: ["maça", "pera", "uva", "banana", "cacau", "acerola"],
    linguagens: [
        "portugues",
        "espanhol",
        "arabe",
        "frances",
        "ingles",
        "grego",
    ],
};

//pego um numero aleatrio do meu array de 0 a 2, que é o tamanho do meu array
const assuntoAleatorio = Math.floor(Math.random() * assunto.length);

// acessando o meu array assunto com o numero dado pelo assunto
const assuntoFinal = assunto[assuntoAleatorio];

//acessando meu objeto e minha lista dentro desse objeto
const assuntoEscolhido = objPalavra[`${assuntoFinal}`];

//aqui estou acessando a minha lista dentro do meu objeto e pegando um elemento aleatoriamente
const palavraCorreta = assuntoEscolhido[Math.floor(Math.random() * 6)];
console.log(palavraCorreta);

const lista = palavraCorreta.split("");
console.log(lista);

const array = lista;
const verifica = array.indexOf("s");
console.log(verifica);
const letraCorreta = [];
const letraErrado = [];

lista.forEach((elemento) => {
    if (elemento === input.value) {
    }
});

enviar.addEventListener("click", (elemento) => {
    elemento.preventDefault();
    input.value = "";
});

// const achei = palavras.findIndex((nome) => {
//     if (nome === "pereira") {
//         return nome;
//     }
// });

//percorre cada letra da minha string dentro do meu array
// const lista = ["alsjdflkaj"];

// lista.forEach((elemento) => {
//     for (let letra = 0; letra < elemento.length; letra++) {
//         console.log(elemento[letra]);
//     }
// });
