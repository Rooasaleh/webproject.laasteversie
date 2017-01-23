var aside = document.querySelector('aside');// maakt variable aan voor aside
var button = document.getElementById("button"); // maak variable aan voor de button die aside opent 

button.addEventListener("click", myFunction); // klikken open de functie

function myFunction(){
  aside.classList.toggle("removal");  
} // voort de functie uit -> aside komt te vevoor schijn
 // door deze toggle wordt de side weer "wegeduwd" in de css staat transform die op de x ass het aside element uit beeld duwt. 

/* pop-up */
var points = document.querySelectorAll('img[alt=points]'); // maakt variable aan voor de points die de tirgger zijn
var popup = document.querySelector('.popup'); // maakt variable aan voor pop up scherm .popup class 
var container = document.querySelector("main nav"); // bevindt zich in de main naviagatie 

points[0].addEventListener("click", function(){ // 
        popup.classList.toggle("popdown"); // 
        console.log(popup);
        container.classList.toggle("fade"); // als popup op komt krijgt de achter grond een fade in css de opacticy aan gegegevn 

    })
