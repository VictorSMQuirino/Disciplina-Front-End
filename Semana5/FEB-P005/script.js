var buscaInformacoesAcademicas = new Promise(function (resolve, reject) {
    fetch('https://newsapi.org/v2/everything?q=academic&language=pt&apiKey=6ef152798d0a4e74b1612df7faad4def')
        .then(function (response) {
        if (response.ok) {
            return response.json();
        }
        else {
            throw new Error(response.statusText);
        }
    })
        .then(function (data) {
        resolve(data);
    }).catch(function (error) { return reject(error); });
});
var buscaInformacoesClimaticas = new Promise(function (resolve, reject) {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=-14.7967616&longitude=-39.175962717&hourly=temperature_2m,weather_code,temperature_80m&timezone=America%2FSao_Paulo')
        .then(function (response) {
        if (response.ok) {
            return response.json();
        }
        else {
            throw new Error(response.statusText);
        }
    })
        .then(function (data) {
        resolve(data);
    }).catch(function (error) { return reject(error); });
});
buscaInformacoesAcademicas.then(function (data) {
    try {
        var json = JSON.stringify(data);
        var resultados = JSON.parse(json);
        for (var i = 1; i <= 3; i++) {
            var tituloNoticia = document.getElementById("titulo-noticia-".concat(i));
            var contNoticia = document.getElementById("conteudo-noticia-".concat(i));
            if (tituloNoticia) {
                tituloNoticia.innerHTML = resultados.articles[i - 1].title;
            }
            if (contNoticia) {
                contNoticia.innerHTML = resultados.articles[i - 1].description;
            }
        }
    }
    catch (error) {
        console.log(error);
    }
}).catch(function (error) { return console.log(error); });
buscaInformacoesClimaticas.then(function (data) {
    try {
        var json = JSON.stringify(data);
        var resultado = JSON.parse(json);
        var temperatura = document.getElementById('temperatura');
        var elevacao = document.getElementById('elevacao');
        var horario = document.getElementById('horario');
        if (temperatura) {
            temperatura.innerHTML = 'Temperatura: ' + resultado.hourly.temperature_2m[1] + 'ºC';
        }
        if (elevacao) {
            elevacao.innerHTML = 'Elevacao: ' + resultado.elevation;
        }
        if (horario) {
            horario.innerHTML = 'Horario: ' + resultado.hourly.time[0];
        }
    }
    catch (error) {
        console.log(error);
    }
}).catch(function (error) { return console.log(error); });
