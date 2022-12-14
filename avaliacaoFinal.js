

class Aluno {

    constructor(nome, quantidadefaltas, notas,) {
        this.nome = nome
        this.faltas = quantidadefaltas
        this.notas = notas
    }

    calcularMedia() {
        return (this.notas.reduce((acc, media) => acc + media)/this.notas.length).toFixed(1);
    }

    metodoFaltas() {
        return this.faltas + 1
    }
}

let Aluno1 = new Aluno("Thiago Silva", 3, [6, 10, 7]);
let Aluno2 = new Aluno("Pâmela Oliveira", 1, [8, 6, 10]);
let Aluno3 = new Aluno("Jesuíta Gomes", 0, [7, 7, 8]);
let Aluno4 = new Aluno("Maria Antonieta", 2, [9, 7, 6]);

let listaAlunos = [Aluno1, Aluno2, Aluno3, Aluno4];


console.log('O valor da média do aluno ' + Aluno1.nome + ' é ' + Aluno1.calcularMedia() + ' e a quantidade atual do número de faltas é ' + Aluno1.metodoFaltas() + '.');


const curso = {
    nomeDoCurso: 'Introdução ao AlgoRave',
    notaDeAprovacao: 7,
    faltasMaximas: 3,
    listaAlunos: [Aluno1, Aluno2, Aluno3, Aluno4],

    matriculaCurso(novoAluno) {
        this.listaAlunos.push(novoAluno);
    }
}

let novoAluno = new Aluno("Wandinha Addams", 1,[10,10,10])



curso.matriculaCurso(novoAluno);
console.log(curso.listaAlunos);


