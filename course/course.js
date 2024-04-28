let voiture1 = 80;
let voiture2 = 80;
let containerWidth = 1200;
let translationX1;
let translationX2;
let maxTranslation = containerWidth - voiture1;
let decompte = 10;
let tempsDepart;

function compteARebour() {
   
    if (decompte > 1) {
        decompte --;
        document.getElementById("decompte").innerHTML = decompte; 
        tempsDepart= Date.now();
        
    } else {
        document.getElementById("decompte").innerHTML = "GO!";  
        setInterval(aleatoireTranslationX,500);
        setInterval(deplacerVoiture, 500);
        setInterval(chronometre,1000);
 
     
    }
    return decompte;
}

function chronometre() { 
     let temps = Date.now() - tempsDepart;   
    secondes = Math.floor((temps/1000));
    document.getElementById("chronometre1").innerHTML =  (secondes < 10 ? "0":"") + secondes + " secondes";
    document.getElementById("chronometre2").innerHTML = (secondes < 10 ? "0" : "") + secondes + " secondes";
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
     
}

function arreterCourse() {
    clearInterval()
}
