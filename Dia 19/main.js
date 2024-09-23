//e58bfd93a525a2df533b979eb459293d
//https://openweathermap.org/img/wn/${dados.weather[0].icon}.png
//https://api.openweathermap.org/data/2.5/weather?q=$(cidade)&appid=$(key)&lang=pt_br&units=metric

const API = 'e58bfd93a525a2df533b979eb459293d'; //provavelmente incorreta

function dadosNaTela(dados) {
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C";
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description;
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%";
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
}

async function buscarCidade(cidade) {
    const resposta = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${API}&lang=pt_br&units=metric`);
    if (!resposta.ok) {
        alert("Cidade não encontrada!");
        return;
    }
    const dados = await resposta.json();
    dadosNaTela(dados);
}

function clickButton() {
    const cidade = document.querySelector(".input-cidade").value;
    buscarCidade(cidade);
}
