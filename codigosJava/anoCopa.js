function mostra(frase) {
    document.write(frase);
    document.write("<br>");
}

var limite = parseInt(prompt("Informe o ano desejado"))
var anoCopa = 1930;

while (anoCopa <= limite) {
    console.log("Teve copa em " + anoCopa);
    anoCopa = anoCopa + 4;
}

mostra("FIM");