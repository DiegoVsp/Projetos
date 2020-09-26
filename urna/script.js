let seuVotoPara = document.querySelector('.d-1-1 span')
let cargo = document.querySelector('.d-1-2 span')
let descricao = document.querySelector('.d-1-4')
let aviso = document.querySelector('.d-2')
// aviso.style.display='none'
let lateral = document.querySelector('.d-1-right')
let numeros = document.querySelector('.d-1-3')

let etapaAtual = 0;
let numero = '';

function comecarEtapa() {
  let etapa = etapas[etapaAtual]

  let numeroHTML = '';

  for(let i = 0;i < etapa.numeros; i++) {
    if(i===0) {
      numeroHTML = '<div class="numero pisca"></div>'
    }else {
      numeroHTML += '<div class="numero"></div>'
    }
  }
  seuVotoPara.style.display = 'none'
  cargo.innerHTML = etapa.titulo
  descricao.innerHTML = '';
  aviso.style.display = 'none'
  lateral.innerHTML = ''
  numeros.innerHTML = numeroHTML
}

function atualizaInterface() {
  let etapa = etapas[etapaAtual]
  let candidato = etapa.candidatos.filter((item) => {
    if(item.numero === numero) {
      return true;
    }else {
      return false;
    }
  })
  console.log('Candidato', candidato)
  
}

function clicou(n) {
  let elementoNumero = document.querySelector('.numero.pisca')
  if(elementoNumero !== null) {
    elementoNumero.innerHTML = n
    numero = `${numero}${n}`;

    elementoNumero.classList.remove('pisca')
    if(elementoNumero.nextElementSibling !== null){
      // adiciona no proximo elemento a classe pisca
      elementoNumero.nextElementSibling.classList.add('pisca')
    }else {
      atualizaInterface();
    }
  }
}
function branco() {
  alert('branco')
}
function corrige() {
  alert('corrige')
}
function confirma() {
  alert('confirma')
}

comecarEtapa()