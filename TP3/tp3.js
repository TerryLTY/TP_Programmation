// Titre
var titre = document.createElement("h1");
titre.setAttribute("id", "titre");
titre.textContent = "Commande de Pizzas";

var containeur = document.createElement("div");
containeur.setAttribute("id", "containeur");
// Margherita
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

// Pepperoni
var labelFormPepperoni = document.createElement("label");
labelFormPepperoni.setAttribute("for", "pepperoni");
labelFormPepperoni.textContent = "Pizza Pepperoni :";

var formPepperoni = document.createElement("form");
formPepperoni.setAttribute("id", "pepperoni");

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

// Paiement
var labelFormPaiement = document.createElement("label");
labelFormPaiement.setAttribute("for", "paiement");
labelFormPaiement.textContent = "Mode de paiement :";

var formPaiement = document.createElement("form");
formPaiement.setAttribute("id", "paiement");

var br5 = document.createElement("br");

var credit = document.createElement("input");
credit.setAttribute("type", "radio");
credit.setAttribute("id", "credit");

var labelCredit = document.createElement("label");
labelCredit.setAttribute("for", "credit");
labelCredit.textContent = " Carte de Crédit (En ligne) ";

var br6 = document.createElement("br");

var debit = document.createElement("input");
debit.setAttribute("type", "radio");
debit.setAttribute("id", "debit");

var labelDebit = document.createElement("label");
labelDebit.setAttribute("for", "debit");
labelDebit.textContent = " Débit/Crédit (À la porte) ";

var br7 = document.createElement("br");

var especes = document.createElement("input");
especes.setAttribute("type", "radio");
especes.setAttribute("id", "especes");

var labelEspeces = document.createElement("label");
labelEspeces.setAttribute("for", "especes");
labelEspeces.textContent = " Espèces (À la porte) ";

// Info Client
var labelFormClient = document.createElement("label");
labelFormClient.setAttribute("for", "client");
labelFormClient.textContent = " Informations sur le client : ";

var formClient = document.createElement("form");
formClient.setAttribute("id", "client");

var br8 = document.createElement("br");

var labelNom = document.createElement("label");
labelNom.setAttribute("for", "nom");
labelNom.textContent = " Nom : ";

var nom = document.createElement("input");
nom.setAttribute("type", "text");
nom.setAttribute("id", "nom");

var br9 = document.createElement("br");

var labelPrenom = document.createElement("label");
labelPrenom.setAttribute("for", "prenom");
labelPrenom.textContent = " Prénom : ";

var prenom = document.createElement("input");
prenom.setAttribute("type", "text");
prenom.setAttribute("id", "prenom");

var br10 = document.createElement("br");

var labelTelephone1 = document.createElement("label");
labelTelephone1.setAttribute("for", "telephone1");
labelTelephone1.textContent = " Téléphone : ";

var telephone1 = document.createElement("input");
telephone1.setAttribute("type", "text");
telephone1.setAttribute("id", "telephone1");

var br11 = document.createElement("br");

var labelAdresse1 = document.createElement("label");
labelAdresse1.setAttribute("for", "adresse1");
labelAdresse1.textContent = " Adresse complète : ";

var adresse1 = document.createElement("input");
adresse1.setAttribute("type", "text");
adresse1.setAttribute("id", "adresse1");

// Info Livraison
var labelFormLivraison = document.createElement("label");
labelFormLivraison.setAttribute("for", "livraison");
labelFormLivraison.textContent = " Informations sur la livraison : ";

var formLivraison = document.createElement("form");
formLivraison.setAttribute("id", "livraison");

var br12 = document.createElement("br");

var labelNomPrenom = document.createElement("label");
labelNomPrenom.setAttribute("for", "nomprenom");
labelNomPrenom.textContent = " Nom et prénom : ";

var nomPrenom = document.createElement("input");
nomPrenom.setAttribute("type", "text");
nomPrenom.setAttribute("id", "nomprenom");

var br13 = document.createElement("br");

var labelTelephone2 = document.createElement("label");
labelTelephone2.setAttribute("for", "telephone2");
labelTelephone2.textContent = " Téléphone : ";

var telephone2 = document.createElement("input");
telephone2.setAttribute("type", "text");
telephone2.setAttribute("id", "telephone2");

var br14 = document.createElement("br");

var labelAdresse2 = document.createElement("label");
labelAdresse2.setAttribute("for", "adresse2");
labelAdresse2.textContent = " Adresse de livraison : ";

var adresse2 = document.createElement("input");
adresse2.setAttribute("type", "text");
adresse2.setAttribute("id", "adresse2");

// Footer
var foot = document.createElement("footer");

var textefoot = document.createElement("p");
textefoot.textContent = "Kordan Radhouane - Lach Thearylou - Lu Ting Yung";
textefoot.setAttribute = ("id", "foot");

// Commander
var commander = document.createElement("button");
commander.setAttribute("type", "button");
commander.setAttribute("id", "commander");
commander.textContent = "Commander";

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

formPaiement.appendChild(labelFormPaiement);
formPaiement.appendChild(br5);
formPaiement.appendChild(credit);
formPaiement.appendChild(labelCredit);
formPaiement.appendChild(br6);
formPaiement.appendChild(debit);
formPaiement.appendChild(labelDebit);
formPaiement.appendChild(br7);
formPaiement.appendChild(especes);
formPaiement.appendChild(labelEspeces);

formClient.appendChild(labelFormClient);
formClient.appendChild(br8);
formClient.appendChild(labelNom);
formClient.appendChild(nom);
formClient.appendChild(br9);
formClient.appendChild(labelPrenom);
formClient.appendChild(prenom);
formClient.appendChild(br10);
formClient.appendChild(labelTelephone1);
formClient.appendChild(telephone1);
formClient.appendChild(br11);
formClient.appendChild(labelAdresse1);
formClient.appendChild(adresse1);

formLivraison.appendChild(labelFormLivraison);
formLivraison.appendChild(br12);
formLivraison.appendChild(labelNomPrenom);
formLivraison.appendChild(nomPrenom);
formLivraison.appendChild(br13);
formLivraison.appendChild(labelTelephone2);
formLivraison.appendChild(telephone2);
formLivraison.appendChild(br14);
formLivraison.appendChild(labelAdresse2);
formLivraison.appendChild(adresse2);

foot.appendChild(textefoot);

document.body.appendChild(titre);
containeur.appendChild(formMargherita);
containeur.appendChild(formPepperoni);
containeur.appendChild(formPaiement);
containeur.appendChild(formClient);
containeur.appendChild(formLivraison);
document.body.appendChild(commander);
document.body.appendChild(containeur);
document.body.appendChild(foot);


