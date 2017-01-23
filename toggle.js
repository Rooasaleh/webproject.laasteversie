var aanmelden = document.querySelector("button[name=meld]");
var inloggen = document.querySelector("button[name=log]");
var formAanmelden = document.getElementById("aanmelden");
var formInloggen = document.getElementById("inloggen");


inloggen.addEventListener("click", function(){
    formAanmelden.style.display = "none";  
    formInloggen.style.display = "block"; 
    inloggen.style.borderColor = "#00D66C";
    inloggen.style.color = "#00D66C";
    aanmelden.style.color = "";
    aanmelden.style.borderColor = "";
    console.log("klik");
})

aanmelden.addEventListener("click", function(){
    formAanmelden.style.display = "block";  
    formInloggen.style.display = "none"; 
    inloggen.style.borderColor = "";
    inloggen.style.color = "";
    aanmelden.style.borderColor = "#00D66C";
    aanmelden.style.color = "#00D66C";
    console.log("klik");
})

// Eerst alle variable aangemaakt voor de twee elementen. De eerste element aanmelden is als eerst zichtbaar en heeft element inloggen in css een display none mee gekregen.
//De toggle heeft voorbeiden formulieren een activatie die de kleur groen mee geeft 
// Helaas is de toggle kwa styling niet helemaal wat het moest worden, dit komt door de border bottom die dient als toggle. Je kan niet een hele radius mee geven. 
