const cabeca = document.querySelector(".cabeca");
const tronco = document.querySelector(".tronco");

const braco = document.querySelectorAll(".braco");
const bracoEsquerdo = document.querySelector(".braco-esquerdo");
const bracoDireito = document.querySelector(".braco-direito");

const perna = document.querySelectorAll(".perna");
const pernaEsquerda = document.querySelector(".perna-esquerda");
const pernaDireita = document.querySelector(".perna-direita");
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

// const lista = palavraCorreta.split("");
// console.log(lista);

const arrayCorreto = palavraCorreta.split("");

const letraCorreta = [];
const letraErrada = [];
let contador = 0;
// pega cada letra inserida no meu input
function pegaCompara() {
    enviar.addEventListener("click", (elemento) => {
        elemento.preventDefault();
        if (palavraCorreta.includes(input.value)) {
            letraCorreta.push(input.value);
            console.log(letraCorreta);
            input.value = "";
        } else {
            letraErrada.push(input.value);

            if (letraErrada.length === 1) {
                membro = cabeca;
            } else if (letraErrada.length === 2) {
                membro = tronco;
            } else if (letraErrada.length === 3) {
                membro = bracoEsquerdo;
            } else if (letraErrada.length === 4) {
                membro = bracoDireito;
            } else if (letraErrada.length === 5) {
                membro = pernaEsquerda;
            } else if (letraErrada.length === 6) {
                membro = pernaDireita;
            }
            apareceCorpo(membro);
        }

        input.value = "";
    });
}

function apareceCorpo(membro) {
    membro.style.display = "block";
}

function compara() {
    letraErrada.find();
}
compara();

pegaCompara();
