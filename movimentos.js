let botaoAzul = document.querySelector("#botoes button:first-of-type");
let botaoVerde = document.querySelector("#botoes button:nth-of-type(2)");
let botaoAmarelo = document.querySelector("#botoes button:last-of-type");
let infos = document.querySelectorAll("#info div");

botaoAzul.addEventListener("click", () => {
    botaoAzul.style.backgroundColor = "black";
    botaoAzul.style.border = "1px solid black";
    botaoAzul.style.boxShadow = "4px 4px black";
    botaoAzul.style.color = "black";
    infos[0].style.marginTop = "-80vh";
});

botaoVerde.addEventListener("click", () => {
    botaoVerde.style.backgroundColor = "black";
    botaoVerde.style.border = "1px solid black";
    botaoVerde.style.boxShadow = "4px 4px black";
    botaoVerde.style.color = "black";
    infos[1].style.marginTop = "-80vh";
});

botaoAmarelo.addEventListener("click", () => {
    botaoAmarelo.style.backgroundColor = "black";
    botaoAmarelo.style.border = "1px solid black";
    botaoAmarelo.style.boxShadow = "4px 4px black";
    botaoAmarelo.style.color = "black";
    infos[2].style.marginTop = "-80vh";
});