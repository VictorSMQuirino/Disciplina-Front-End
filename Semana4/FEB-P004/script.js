console.log("Script JavaScript executado");
var botoesComprar = document.querySelectorAll('.roteiro-comprar')

botoesComprar.forEach(function(botao) {
    botao.addEventListener('click', function() {
      capturarInformacoes(this)
    })
  })

function coletaInformacoes(botao){
    //console.log("Click no botão ocorreu...")
    var destino = botao.parentElement.querySelector('.roteiro-destino').innerText
    console.log("Elemento destino:", destinoElement);
    var preco = botao.parentElement.querySelector('.roteiro-preco').innerText
    var taxas = botao.parentElement.querySelector('.roteiro-obs').innerText
    var parcelamento = botao.parentElement.querySelector('.roteiro-parcelamento').innerText

    var pacoteTuristico = {
        destino: destino,
        preco: preco,
        taxas: taxas,
        parcelamento: parcelamento
    };

    console.log(JSON.stringify(pacoteTuristico));
}