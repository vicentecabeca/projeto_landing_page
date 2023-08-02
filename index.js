/* variaveis */
var seta_esquerda = window.document.getElementById("seta_esquerda")
var bruna = window.document.getElementById("cadbruna")
var leonardo = window.document.getElementById("cadleonardo")
var samanta = window.document.getElementById("cadsamanta")
var seta_direita = window.document.getElementById("seta_direita")
/* função de transição a direita */
function Rolarparadireita(){
    leonardo.style = "display:none"
    bruna.style = "display:flex"
    seta_esquerda.style = "display:flex"
    seta_direita.style = "display:none"
}

/* função de transição a esquerda */
function Rolarparaesquerda(){
    leonardo.style = "display:flex"
    bruna.style = "display:none"
    seta_esquerda.style = "display:none"
    seta_direita.style = "display:flex"
}