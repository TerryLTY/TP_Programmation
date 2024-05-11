var titre = document.createElement("h1");
titre.setAttribute("id", "titre");
titre.textContent = "Commande de Pizzas";

var labelFormMargherita = document.createElement("label");
labelFormMargherita.setAttribute("for", "margherita");
labelFormMargherita.textContent = "Pizza Margherita :";

var formMargherita = document.createElement("form");
formMargherita.setAttribute("id", "margherita");

var br1 = document.createElement("br");

var margheritaCheck = document.createElement("input");
margheritaCheck.setAttribute("type", "checkbox");
margheritaCheck.setAttribute("id", "margheritacheck");

var labelQMargherita = document.createElement("label");
labelQMargherita.setAttribute("for", "qmargherita");
labelQMargherita.textContent = "Margherita Quantité :";

var qMargherita = document.createElement("input");
qMargherita.setAttribute("type", "number");
qMargherita.setAttribute("min", "0");
qMargherita.setAttribute("max", "50");
qMargherita.setAttribute("id", "qmargherita");

var br2 = document.createElement("br");

var labelGarnitures1 = document.createElement("label");
labelGarnitures1.setAttribute("for", "garnitures");
labelGarnitures1.textContent = "Garnitures : ";

var fromage1 = document.createElement("input");
fromage1.setAttribute("type", "checkbox");
fromage1.setAttribute("id", "fromage1");

var labelFromage1 = document.createElement("label");
labelFromage1.setAttribute("for", "fromage1");
labelFromage1.textContent = " Fromage ";

var champignons1 = document.createElement("input");
champignons1.setAttribute("type", "checkbox");
champignons1.setAttribute("id", "champignons1");

var labelChampignons1 = document.createElement("label");
labelChampignons1.setAttribute("for", "champignons1");
labelChampignons1.textContent = " Champignons ";

var oignons = document.createElement("input");
oignons.setAttribute("type", "checkbox");
oignons.setAttribute("id", "oignons");

var labelOignons = document.createElement("label");
labelOignons.setAttribute("for", "oignons");
labelOignons.textContent = " Oignons ";



var labelFormPepperoni= document.createElement("label");
labelFormPepperoni.setAttribute("for", "pepperoni");
labelFormPepperoni.textContent = "Pizza Pepperoni :";

var formPepperoni = document.createElement("form");
formPepperoni.setAttribute("id", "pepperoni")

var br3 = document.createElement("br");

var pepperoniCheck = document.createElement("input");
pepperoniCheck.setAttribute("type", "checkbox");
pepperoniCheck.setAttribute("id", "pepperonicheck");

var labelQPepperoni = document.createElement("label");
labelQPepperoni.setAttribute("for", "pepperoni");
labelQPepperoni.textContent = " Pepperoni Quantité :";

var qPepperoni = document.createElement("input");
qPepperoni.setAttribute("type", "number");
qPepperoni.setAttribute("min", "0");
qPepperoni.setAttribute("max", "50");
qPepperoni.setAttribute("id", "qPepperoni");

var br4 = document.createElement("br");

var labelGarnitures2 = document.createElement("label");
labelGarnitures2.setAttribute("for", "garnitures");
labelGarnitures2.textContent = "Garnitures : ";

var fromage2 = document.createElement("input");
fromage2.setAttribute("type", "checkbox");
fromage2.setAttribute("id", "fromage2");

var labelFromage2 = document.createElement("label");
labelFromage2.setAttribute("for", "fromage2");
labelFromage2.textContent = " Fromage ";

var champignons2 = document.createElement("input");
champignons2.setAttribute("type", "checkbox");
champignons2.setAttribute("id", "champignons2");

var labelChampignons2 = document.createElement("label");
labelChampignons2.setAttribute("for", "champignons2");
labelChampignons2.textContent = " Champignons ";

var olive = document.createElement("input");
olive.setAttribute("type", "checkbox");
olive.setAttribute("id", "olive");

var labelOlive = document.createElement("label");
labelOlive.setAttribute("for", "olive");
labelOlive.textContent = " Olive ";


var foot = document.createElement("footer");
var textefoot = document.createElement("p")
textefoot.textContent = "Kordan Radhouane - Lach Thearylou - Lu Ting Yung";
textefoot.setAttribute = ("id", "foot");


formMargherita.appendChild(labelFormMargherita);
formMargherita.appendChild(br1);
formMargherita.appendChild(margheritaCheck);
formMargherita.appendChild(labelQMargherita);
formMargherita.appendChild(qMargherita);
formMargherita.appendChild(br2);
formMargherita.appendChild(labelGarnitures1);
formMargherita.appendChild(fromage1);
formMargherita.appendChild(labelFromage1);
formMargherita.appendChild(champignons1);
formMargherita.appendChild(labelChampignons1);
formMargherita.appendChild(oignons);
formMargherita.appendChild(labelOignons);

formPepperoni.appendChild(labelFormPepperoni);
formPepperoni.appendChild(br3);
formPepperoni.appendChild(pepperoniCheck);
formPepperoni.appendChild(labelQPepperoni);
formPepperoni.appendChild(qPepperoni);
formPepperoni.appendChild(br4);
formPepperoni.appendChild(labelGarnitures2);
formPepperoni.appendChild(fromage2);
formPepperoni.appendChild(labelFromage2);
formPepperoni.appendChild(champignons2);
formPepperoni.appendChild(labelChampignons2);
formPepperoni.appendChild(olive);
formPepperoni.appendChild(labelOlive);

foot.appendChild(textefoot);

document.body.appendChild(titre);
document.body.appendChild(formMargherita);
document.body.appendChild(formPepperoni);
document.body.appendChild(foot);
