class Tarefa {
    constructor(nome){
        this.nome = nome
    }

    get nome(){
        return this._nome
    }
}
let task = document.getElementById('texto')
let botao = document.getElementById('botao')
botao.addEventListener('click', adicionaTarefaDOM(new Tarefa(task.textContent)))

function adicionaTarefaDOM(tarefa){
    let li = document.createElement('li')
    li.textContent = tarefa.nome
    document.getElementById('listaTarefas').appendChild(li)

    adicionaTarefaNoStorage(tarefa)
}

function adicionaTarefaNoStorage(tarefa){
    var storage = JSON.parse(localStorage.getItem('tarefasStorage'))

    if(storage){
        storage.push(tarefa.nome)
    } else {
        let array = []
        array.push(tarefa.nome)
        localStorage.setItem('tarefasStorage', JSON.stringify(array))
    }
}