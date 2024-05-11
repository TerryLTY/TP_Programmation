var titre = document.createElement("h1");
titre.setAttribute("id", "titre");
titre.textContent = "Commande de Pizzas";

var labelFormMargherita = document.createElement("label");
labelFormMargherita.setAttribute("for", "margherita");
labelFormMargherita.textContent = "Pizza Margherita :";

var formMargherita = document.createElement("form");
formMargherita.setAttribute("id", "margherita");

var margheritaCheck = document.createElement("input");
margheritaCheck.setAttribute("type", "checkbox");
margheritaCheck.setAttribute("id", "margheritacheck");

var labelQMargherita = document.createElement("label");
var qMargherita = document.createElement("input");

var labelGarnitures1 = document.createElement("label");
var fromage1 = document.createElement("input");
var champignons1 = document.createElement("input");
var oignons1 = document.createElement("input");


var labelFormPepperoni= document.createElement("label");
labelFormPepperoni.setAttribute("for", "pepperoni");
labelFormPepperoni.textContent = "Pizza Pepperoni :";

var formPepperoni = document.createElement("form");

var pepperoniCheck = document.createElement("input");
pepperoniCheck.setAttribute("type", "checkbox");
pepperoniCheck.setAttribute("id", "pepperonicheck");

var labelQPepperoni = document.createElement("label");
var qPepperoni = document.createElement("input");

var labelGarnitures2 = document.createElement("label");
var fromage2 = document.createElement("input");
var champignons2 = document.createElement("input");
var oignons2 = document.createElement("input");

var foot = document.createElement("footer");
var textefoot = document.createElement("p")
textefoot.textContent = "Kordan Radhouane - Lach Thearylou - Lu Ting Yung";
textefoot.setAttribute = ("id", "foot");


formMargherita.appendChild(labelFormMargherita);
formMargherita.appendChild(margheritaCheck);
formMargherita.appendChild(labelQMargherita);
formMargherita.appendChild(qMargherita);
formMargherita.appendChild(fromage1);
formMargherita.appendChild(champignons1);
formMargherita.appendChild(oignons1);

formPepperoni.appendChild(labelFormPepperoni);
formMargherita.appendChild(pepperoniCheck);
formMargherita.appendChild(labelQPepperoni);
formMargherita.appendChild(qPepperoni);
formPepperoni.appendChild(labelGarnitures2);
formPepperoni.appendChild(fromage2);
formPepperoni.appendChild(champignons2);
formPepperoni.appendChild(oignons2);

foot.appendChild(textefoot);

document.body.appendChild(titre);
document.body.appendChild(labelFormMargherita);
document.body.appendChild(labelFormPepperoni);
document.body.appendChild(foot);
