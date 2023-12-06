
// let grupos = ['Grupo 1', 'Grupo 2', 'Grupo 3', 'Grupo 4', 'Grupo 5'];


// function sortearGrupo() {
//   if (grupos.length === 0) {
//     document.getElementById('resultado').innerHTML = 'Todos os grupos foram sorteados.';
//     return;
//   }

//   let indiceSorteado = Math.floor(Math.random() * grupos.length);
//   let grupoSorteado = grupos[indiceSorteado];

//   grupos.splice(indiceSorteado, 1);


//   document.getElementById('resultado').innerHTML = 'Grupo sorteado para apresentação: ' + grupoSorteado;

//   let gif = document.createElement('img');
//   gif.src = 'assets/images/giphy.gif'; 
//   gif.alt = 'Sorteio em andamento';
//   document.getElementById('grupos').appendChild(gif);



//   let audioSorteio = new Audio('assets/sounds/som-sorteio.mp3'); 
//   audioSorteio.play();

//   setTimeout(function() {
//     gif.remove();
//   }, 6000); 
// }

let grupos = ['Grupo 1', 'Grupo 2', 'Grupo 3', 'Grupo 4', 'Grupo 5'];
let sorteioEmAndamento = false;

function sortearGrupo() {
  if (sorteioEmAndamento) {
    return;
  }

  sorteioEmAndamento = true;

  let botaoSortear = document.querySelector('.sortear button');
  botaoSortear.disabled = true;

  if (grupos.length === 0) {
    document.getElementById('resultado').innerHTML = 'Todos os grupos foram sorteados.';
    return;
  }

  let indiceSorteado = Math.floor(Math.random() * grupos.length);
  let grupoSorteado = grupos[indiceSorteado];
  grupos.splice(indiceSorteado, 1);

  document.getElementById('resultado').innerHTML = 'Grupo sorteado para apresentação: ' + grupoSorteado;

  let gif = document.createElement('img');
  gif.src = 'assets/images/giphy.gif';
  gif.alt = 'Sorteio em andamento';
  document.getElementById('grupos').appendChild(gif);

  let audioSorteio = new Audio('assets/sounds/som-sorteio.mp3');
  audioSorteio.play();

  setTimeout(function() {
    gif.remove();
    botaoSortear.disabled = false;
    sorteioEmAndamento = false;
  }, 6000);
}