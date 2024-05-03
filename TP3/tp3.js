var titre = document.createElement("H1");
titre.setAttribute("id", "titre");
titre.textContent = "Commande de Pizzas";

var foot = document.createElement("DIV");
var textefoot = document.createElement("p")
textefoot.textContent = "Kordan Radhouane - Lach Thearylou - Lu Ting Yung";
textefoot.setAttribute = ("id", "foot");

foot.appendChild(textefoot)

document.body.appendChild(titre);
document.body.appendChild(foot);
