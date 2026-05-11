// FRASES POR DIFICULDADE

const frasesFaceis = [
    "Bom dia",
    "Meu nome João",
    "Eu gosto música",
    "Hoje calor",
    "Água gelada"
];

const frasesMedias = [
    "Eu fui mercado comprar frutas",
    "Cachorro correu quintal",
    "Minha família gosta viajar",
    "Precisamos estudar todos dias",
    "Céu muito bonito hoje"
];

const frasesDificeis = [
    "Tecnologia ajuda pessoas comunicação melhor",
    "Reabilitação fala exige prática constante",
    "Exercícios diários melhoram coordenação vocal",
    "Inteligência artificial pode auxiliar tratamentos médicos",
    "Comunicação essencial qualidade vida"
];

// ELEMENTOS
const frase = document.getElementById("frase");
const botaoMic = document.getElementById("botaoMic");
const nivelTexto = document.getElementById("nivelTexto");

// CONTADOR
let nivel = 0;

// EVENTO DO BOTÃO
botaoMic.addEventListener("click", () => {

    let listaAtual = [];
    let nomeNivel = "";

    // ESCOLHE A DIFICULDADE
    if (nivel < 5) {
        listaAtual = frasesFaceis;
        nomeNivel = "Fácil";
    }

    else if (nivel < 10) {
        listaAtual = frasesMedias;
        nomeNivel = "Médio";
    }

    else {
        listaAtual = frasesDificeis;
        nomeNivel = "Difícil";
    }

    // FRASE ALEATÓRIA
    const fraseAleatoria =
        listaAtual[Math.floor(Math.random() * listaAtual.length)];

    // MOSTRA FRASE
    frase.innerText = fraseAleatoria;

    // MOSTRA NÍVEL
    nivelTexto.innerText = `Nível: ${nomeNivel}`;

    // AUMENTA DIFICULDADE
    nivel++;
});