const alunos = 5;
const disciplinas = 3;
let notas = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

function criarTabelaInputs() {
    const tbody = document.querySelector("table");
    
    for (let aluno = 0; aluno < alunos; aluno++) {
        const tr = document.createElement("tr");
        const tdAluno = document.createElement("td");
        tdAluno.textContent = `Aluno ${aluno + 1}`;
        tr.appendChild(tdAluno);

        for (let disciplina = 0; disciplina < disciplinas; disciplina++) {
            const td = document.createElement("td");
            const input = document.createElement("input");
            input.type = "number";
            input.value = notas[aluno][disciplina];
            
            input.addEventListener("change", function() {
                notas[aluno][disciplina] = parseFloat(this.value) || 0;
            });

            td.appendChild(input);
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
}

function calcularMedia() {
    const disciplinaSelecionada = parseInt(document.getElementById("disciplina").value);
    let soma = 0;

    for (let aluno = 0; aluno < alunos; aluno++) {
        soma += notas[aluno][disciplinaSelecionada];
    }

    const media = soma / alunos;
    mostrarResultado(media);
}

function mostrarResultado(media) {
    const resultado = document.getElementById("resultado");
    let mensagem = `Média da turma: ${media.toFixed(2)} - `;
    let classe = "";

    switch (true) {
        case media >= 6:
            mensagem += "Turma aprovada";
            classe = "aprovado";
            break;
        case media >= 4:
            mensagem += "Turma em recuperação";
            classe = "recuperacao";
            break;
        default:
            mensagem += "Turma reprovada";
            classe = "reprovado";
    }

    resultado.className = `resultado ${classe}`;
    resultado.innerHTML = mensagem;
}

window.onload = criarTabelaInputs;
