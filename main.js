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
const assunto = ["cidade", "frutas", "idiomas"];

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
    idiomas: ["portugues", "espanhol", "arabe", "frances", "ingles", "grego"],
};

const assuntoAleatorio = Math.floor(Math.random() * assunto.length);

const assuntoFinal = assunto[assuntoAleatorio];

const assuntoEscolhido = objPalavra[`${assuntoFinal}`];

const palavraCorreta = assuntoEscolhido[Math.floor(Math.random() * 6)];

const arrayCorreto = palavraCorreta.split("");

const letraCorreta = [];
const letraErrada = [];
const letraRepetida = [];

function desenha() {
    enviar.addEventListener("click", (elemento) => {
        elemento.preventDefault();
        if (palavraCorreta.includes(input.value)) {
            letraCorreta.push(input.value);
            mostraLetraCerta();
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
        ganhouOuPerdeu();
        input.value = "";
    });
}

function apareceCorpo(membro) {
    membro.style.display = "block";
}

function tema() {
    const tema = document.querySelector(".tema");
    tema.innerHTML = `O tema é sobre ${assuntoFinal}`;
}

function mostraLetraCerta() {
    const container = document.querySelector(".palavra-secreta-container");
    container.innerHTML = " ";
    arrayCorreto.forEach((letra) => {
        if (letraCorreta.includes(letra)) {
            container.innerHTML += `<span>${letra}</span>`;
        } else {
            container.innerHTML += `<span>_</span>`;
        }
    });
}

function ganhouOuPerdeu() {
    const container = document.querySelector(".palavra-secreta-container");
    let mensagem = "";
    if (letraErrada.length === 6) {
        mensagem = "você perdeu!";
    }

    if (palavraCorreta === container.innerText) {
        mensagem = "você ganhou!!";
    }
    if (mensagem) {
        document.querySelector("#mensagem").innerHTML = mensagem;
        document.querySelector(".popup-container").style.display = " flex";
    }
}

function reiniciarJogo() {
    window.location.reload();
}
tema();
desenha();
