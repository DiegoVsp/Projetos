let seuVotoPara = document.querySelector('.d-1-1 span')
let cargo = document.querySelector('.d-1-2 span')
let descricao = document.querySelector('.d-1-4')
let aviso = document.querySelector('.d-2')
// aviso.style.display='none'
let lateral = document.querySelector('.d-1-right')
let numeros = document.querySelector('.d-1-3')

let etapaAtual = 0;
let numero = '';
let vtbranco = false;
let votos = []

function comecarEtapa() {
  let etapa = etapas[etapaAtual]

  let numeroHTML = '';
  numero = '';
  vtbranco = false;

  for (let i = 0; i < etapa.numeros; i++) {
    if (i === 0) {
      numeroHTML = '<div class="numero pisca"></div>'
    } else {
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
    if (item.numero === numero) {
      return true;
    } else {
      return false;
    }
  })
  if (candidato.length > 0) {
    candidato = candidato[0]
    seuVotoPara.style.display = 'block'
    aviso.style.display = 'block'
    descricao.innerHTML = `Nome: ${candidato.nome}<br/> Partido: ${candidato.partido}`

    let fotosHtml = '';
    for (let i in candidato.fotos) {
      if (candidato.fotos[i].small) {
        fotosHtml += `<div class="d-1-image small">
        <img src="./imgs/${candidato.fotos[i].url}" alt="img1">
        ${candidato.fotos[i].legenda}
      </div>`
      } else {
        fotosHtml += `<div class="d-1-image">
        <img src="./imgs/${candidato.fotos[i].url}" alt="img1">
        ${candidato.fotos[i].legenda}
      </div>`

      }
    }
    lateral.innerHTML = fotosHtml;
  } else {
    seuVotoPara.style.display = 'block'
    aviso.style.display = 'block'
    descricao.innerHTML = '<div class="aviso--grande pisca">VOTO NULO</div>'
  }
}

function clicou(n) {
  let elementoNumero = document.querySelector('.numero.pisca')
  if (elementoNumero !== null) {
    elementoNumero.innerHTML = n
    numero = `${numero}${n}`;

    elementoNumero.classList.remove('pisca')
    if (elementoNumero.nextElementSibling !== null) {
      // adiciona no proximo elemento a classe pisca
      elementoNumero.nextElementSibling.classList.add('pisca')
    } else {
      atualizaInterface();
    }
  }
}
function branco() {
  if (numero === '') {
    vtbranco = true;
    seuVotoPara.style.display = 'block'
    aviso.style.display = 'block'
    numeros.innerHTML = '';
    descricao.innerHTML = '<div class="aviso--grande pisca">VOTO EM BRANCO</div>'
  } else {
    alert('Para votar em branco não deve ter digitado nenhum número')
  }
}
function corrige() {
  comecarEtapa()
}
function confirma() {
  let etapa = etapas[etapaAtual]

  let votoConfirmado = false;
  if (vtbranco) {
    votoConfirmado = true;
    votos.push({
      etapa: etapas[etapaAtual].titulo,
      voto: 'branco'
    })
  } else if (numero.length === etapa.numeros) {
    votoConfirmado = true;
    votos.push({
      etapa: etapas[etapaAtual].titulo,
      voto: numero
    })
  }
  if (votoConfirmado) {
    etapaAtual++;
    if (etapas[etapaAtual] !== undefined) {
      comecarEtapa()
    } else {
      document.querySelector('.tela').innerHTML = '<div class="aviso--gigante pisca">FIM</div>'
      console.log(votos)
      etapaAtual = 0
    }
  }
}

comecarEtapa()