class Computador {
    constructor(marca, modelo, processador, ram){
        this.marca = marca
        this.modelo = modelo
        this.processador = processador
        this.ram = ram
    }

    get marca(){
        return this._marca
    }

    get modelo(){
        return this._modelo
    }

    get processador(){
        return this._processador
    }

    get ram(){
        return this._ram
    }

    liga(){
        alert('O computador está ligando...')
    }

    desliga(){
        alert('O computador está desligando...')
    }
}

let cp1 = new Computador('Dell', 'm1', 'amd', 16)
let cp2 = new Computador('Acer', 'm2', 'intel', 8)
let cp3 = new Computador('Azus', 'm3', 'intel', 16)

let map1 = retornaMapComputador(cp1)
criaListaDoMap(map1)
let map2 = retornaMapComputador(cp2)
criaListaDoMap(map2)
let map3 = retornaMapComputador(cp3)
criaListaDoMap(map3)

function retornaMapComputador(computador){
   
   let mapComputador = new Map(Object.entries(computador))

   return mapComputador
}

function criaListaDoMap(mapComputador){
    let lista = document.createElement('ul')

    for(let [key, value] of mapComputador){
        let item = document.createElement('li')
        item.textContent = key + ':' + value
        lista.appendChild(item)
    }

    document.body.appendChild(lista)
}