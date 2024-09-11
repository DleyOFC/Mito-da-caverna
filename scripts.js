let vidas = 3;
let perguntaAtual = 0;

const perguntas = [
    {
        pergunta: "Esse animal corre menos de 60 km/h?",
        opcoes: ["Sim", "Não", "Apenas quando está assustado", "Quando está caçando"],
        correta: 2
    },
    {
        pergunta: "Esse animal vive em manadas?",
        opcoes: ["Sim", "Não", "Apenas em cativeiro", "Não tem vida social"],
        correta: 1
    },
    {
        pergunta: "Esse animal tem listras?",
        opcoes: ["Sim", "Não", "Apenas durante a noite", "Somente se for pintado"],
        correta: 1
    },
    {
        pergunta: "Esse animal é encontrado no Brasil?",
        opcoes: ["Sim", "Não", "Somente em zoológicos", "Elefantes são mais comuns"],
        correta: 3
    },
    {
        pergunta: "Esse animal é da família dos veados?",
        opcoes: ["Sim", "Não", "Ele é parente dos leões", "Não, ele é um tipo da familia dos cavalos"],
        correta: 4
    }
];

function mostrarOpcoes() {
    document.getElementById('opcoes').classList.remove('escondido');
}

function nomeErrado() {
    alert("Parabens,você é muito inteligente,pode ficar por aqui mesmo.");
}

function iniciarPerguntas() {
    document.getElementById('opcoes').classList.add('escondido');
    document.getElementById('quiz').classList.remove('escondido');
    carregarPergunta();
}

function carregarPergunta() {
    if (perguntaAtual >= perguntas.length) {
        alert("Fim do quiz! Agora vá para o caça-palavras. (6x vidas)");
        document.getElementById('quiz').classList.add('escondido');
        document.getElementById('cacaPalavras').classList.remove('escondido');
        return;
    }
    let p = perguntas[perguntaAtual];
    document.getElementById('pergunta').textContent = p.pergunta;
    document.querySelectorAll('#quiz button').forEach((btn, i) => {
        btn.textContent = p.opcoes[i];
    });
}

function responder(opcao) {
    let p = perguntas[perguntaAtual];
    if (opcao === p.correta) {
        alert("Correto!");
        perguntaAtual++;
        carregarPergunta();
    } else {
        vidas--;
        document.getElementById('vidas').textContent = `Vidas restantes: ${vidas}`;
        if (vidas === 0) {
            alert("Você perdeu todas as vidas! Agora vá para o caça-palavras. (6x vidas)");
            document.getElementById('quiz').classList.add('escondido');
            document.getElementById('cacaPalavras').classList.remove('escondido');
        }
    }
}

function verificarPalavra() {
    const palavra = document.getElementById('palavraInput').value.toLowerCase();
    const palavraCorreta = "zebra";
    let resultado = "";

    for (let i = 0; i < palavra.length; i++) {
        if (palavra[i] === palavraCorreta[i]) {
            resultado += `<span style="color:green;">${palavra[i]}</span>`;
        } else if (palavraCorreta.includes(palavra[i])) {
            resultado += `<span style="color:yellow;">${palavra[i]}</span>`;
        } else {
            resultado += `<span style="color:red;">${palavra[i]}</span>`;
        }
    }

    document.getElementById('resultado').innerHTML = resultado;

    if (palavra === palavraCorreta) {
        alert("Parabéns! Você descobriu que a sombra é uma zebra.");
    }
}
