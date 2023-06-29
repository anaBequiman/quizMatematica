var pontos = 0;
function atualizarPts(){
    pontos = pontos + 1;
    document.getElementById("pts").innerHTML = pontos;
};
function salvarPts(){
    localStorage.setItem("salvarPontos", pontos);
};
function proximoPg(){
    window.location="indexDois.html";
}
function obterPts(){
    var score = localStorage.getItem("salvarPontos");
    document.getElementById("update").innerHTML = score;
}