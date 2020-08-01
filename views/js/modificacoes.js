//automatizar marcador de data e semana no calendário
//pegar da data atual
const data = new Date();
//definir o mes
const mesTagHtml = document.getElementById('titulo1').textContent;
const array = ['Janeiro 2020', 'Fevereiro 2020', 'Março 2020', 'Abril 2020', 'Maio 2020', 'Junho 2020', 'Julho 2020', 'Agosto 2020', 'Setembro 2020', 'Outubro 2020', 'Novembro 2020', 'Dezembro 2020'];
const mes = data.getMonth();
const paraDefinirMes = array[mes]
//definir a semana
const semanaTagHtml = document.querySelectorAll('.semana');
const semana = data.getDay();
const semanaExata = semanaTagHtml[semana]
//definir o dia
const diaTagHtml = document.querySelectorAll('.dia')
const dia = data.getDate();
const diaExato = diaTagHtml[dia - 1]
//definir o marcador dos dias exatos da semana
function marcadorDataExataDoAno() {
    if (mesTagHtml === paraDefinirMes) {
        if (semanaExata || diaExato) {
            semanaExata.style.borderColor = 'red';
            diaExato.style.borderColor = 'red';
        }
    }

}
marcadorDataExataDoAno()


















