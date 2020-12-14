let monTexte = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";

// Completer le code suivant pour afficher la longueur de la variable monTexte

alert(monTexte.length);


//Ajouter du code ci dessous pour réaliser la suite de l'exercice
let position = document.querySelector("span").innerHTML.indexOf('i');
document.getElementById("position").innerHTML = position.toString();

let chaine = document.querySelector('span').innerHTML;
let majChaine = chaine.toUpperCase();

document.getElementById("chaineMaj").innerHTML = majChaine;

console.log(chaine);
for (let i = 0 ; i < chaine.length ; i++){
    if (chaine[i] === 'a'){
        alert("lettre a trouvé" + i);
    }
}

