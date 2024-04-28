let voiture1 = 80;
let voiture2 = 80;
let containerWidth = 1200;
let translationX1;
let translationX2;
let maxTranslation = containerWidth - voiture1;
let decompte = 10;

function compteARebour() {
    if (decompte > 1) {
        decompte --;
        document.getElementById("decompte").innerHTML = decompte;
    } else {
        document.getElementById("decompte").innerHTML = "GO!";
    }
    return decompte;
}

function chronometre() {
    
}

function aleatoireTranslationX() {
    translationX1 = Math.floor(Math.random() * 100);
    translationX2 = Math.floor(Math.random() * 100);
}

function deplacerVoiture() {
    voiture1 += translationX1;
    voiture2 += translationX2;
    document.getElementById("voiture1").style.translate = voiture1 + "px"; 
    document.getElementById("voiture2").style.translate = voiture2 + "px";
    //style.translate a la place de style.left pour une animation lisse (c'est plus cool)
}

function demarrerCourse() {
    setInterval(compteARebour, 500);
    setInterval(aleatoireTranslationX,500);
    setInterval(deplacerVoiture, 500);
    
}

function arreterCourse() {
    clearInterval()
}
