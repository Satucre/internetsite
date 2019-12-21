var slideIndex = 1;     // slides indexed from 1

function load() {
    showSlides(slideIndex);
    setTimeout(automaticChange, 7000);  // To avoid automatic change, comment this line
}

function apropos() {
    clearSlideShow();
    clearSectionText();
    showProposImg();
    document.getElementsByClassName("title-text")[0].innerHTML = "À Propos de Moi (Formelle CV)";
}  

function ville() {
    clearProposImg();
    showSectionText();
    showSlideShow();
    document.getElementsByClassName("title-text")[0].innerHTML = "Ma Ville Natale";
    document.getElementById("text1").innerHTML = "Je suis née au Canada, plus précisement au Québec. Cela fait donc 20 ans que j'habite au Québec. Le Québec est une province très extraordinaire que j'aime de tout mon coeur! ";
    document.getElementById("text2").innerHTML = "Un peu plus précis, je suis née dans la ville de Val-d'Or. Val-d'Or est une ville d'environ 65 000 habitants située dans la région de l'Abitibi-Témiscamingue. Val-d'Or est une ville orientée sur l'exploitation minière. Elle possède une majeure partie des mines du Québec. Voici quelques images de ma belle ville natale!";
    setSlideShowImages("images/slideshowville1.jpg", "images/slideshowville2.jpg", "images/slideshowville3.jpg", "La 3e avenue!", "La tour Rotary!", "La mine Goldex!");
}  

function passetemps() {
    clearProposImg();
    showSectionText();
    showSlideShow();
    document.getElementsByClassName("title-text")[0].innerHTML = "Mes Passe-Temps";
    document.getElementById("text1").innerHTML = "Personnellement, j'aime toucher à tout! Alors j'ai beaucoup de passe-temps. Un de mes passe-temps préférés est de gamer (jouer à des jeux vidéos). Je peux passer des heures à jouer à des jeux vidéos lorsque je n'ai rien à faire. J'aime bien jouer à des jeux comme Runescape, World of Warcraft, League of Legends, Dofus, etc.!";
    document.getElementById("text2").innerHTML = "Un autre des mes passe-temps favoris est de lire. Puisque j'aime apprendre et toucher à tout, il est vraiment important pour moi d'en connaître plus sur de nombreux sujets. Alors je lis des livres sur la finance, la comptabilité, les investissements, comment bien apprendre, comment s'améliorer, comment être heureux ou même parfois histoires de fantaisies, d'action, de science-fiction, etc. Mais mes livres préférés sont définitivement ceux de programmation informatique!";
    setSlideShowImages("images/slideshowpassetemps1.jpg", "images/slideshowpassetemps2.jpg", "images/slideshowpassetemps3.jpg", "League of Legends!", "Runescape!", "Quelques bons livres de programmation!");
}  

function sports() {
    clearProposImg();
    showSectionText();
    showSlideShow();
    document.getElementsByClassName("title-text")[0].innerHTML = "Mes Sports Préférés";
    document.getElementById("text1").innerHTML = "J'adore pas mal tous les sports, mais mon favoris est sans hésiter le soccer! J'ai jouer pendant 9 ans consécutives au soccer dans une des ligue de Val-d'Or. Je jouais dans la ligue AAA, qui est une ligue assez forte. Je jouais la position de gardien de but. Nous avons gagnée des dizaines de médailles et quelques trophées. Que du plaisirs à ne pas oublier! ";
    document.getElementById("text2").innerHTML = "J'adore aussi le hockey, evidemment puisque nous sommes au Québec! Mais j'aime aussi le volleyball et la basket-ball. Par contre, ce sont des sports que je n'ai pratiqué que récréativement. Je joue seulement pour le plaisir, avec des amis, des collèges et même parfois des inconnus. Mais, je peux dire que je me fais autant de plaisir à faire ces sports que le soccer.";
    setSlideShowImages("images/slideshowsports1.jpg", "images/slideshowsports2.jpg", "images/slideshowsports3.jpg", "Le soccer!", "Le hockey!", "Le volleyball!");
}  

function activites() {
    clearProposImg();
    showSectionText();
    showSlideShow();
    document.getElementsByClassName("title-text")[0].innerHTML = "Mes Activités et Loisirs";
    document.getElementById("text1").innerHTML = "Puisque je suis née dans une région assez éloignée. Il est assez facile de deviner que j'adore faire du camping. Se perdre dans la forêt. Construire des cabanes dans les arbres. Faire du quatre-roues. Se baigner dans le lac. Faire du bâteau. Explorer la nature. Faire des feu de camps. Ou juste même encore plus simple, ne rien faire et apprécier la nature! ";
    document.getElementById("text2").innerHTML = "Ça fait maintenant bientôt 4 ans que je vis à Montréal pour les études alors j'ai appris à découvrir toutes sortes d'activités de ville aussi. Mais définitivement ma préféré est d'aller voir des spectacles (show) de musique. J'adore la musique et c'est une façon pour moi de me divertir. Que ce soit des spectacles de musique un peu plus relaxante ou que ce soit des spectacles remplis d'action et de musique contemporaine comme Kshmr, Loud Luxury, Alan Walker, Martin Garrix et j'en passe!";
    setSlideShowImages("images/slideshowactivites1.jpg", "images/slideshowactivites2.jpg", "images/slideshowactivites3.jpg", "Du camping en forêt!", "Un show de Kshmr!", "Un show de Martin Garrix!");
}

function setSlideShowImages(image1, image2, image3, caption1, caption2, caption3) {
    document.getElementById("slideshow1").setAttribute("src", image1);
    document.getElementById("slideshow2").setAttribute("src", image2);
    document.getElementById("slideshow3").setAttribute("src", image3);
    document.getElementById("caption1").innerHTML = caption1;
    document.getElementById("caption2").innerHTML = caption2;
    document.getElementById("caption3").innerHTML = caption3;
}

function clearProposImg() {
    document.getElementsByClassName("aproposimg")[0].setAttribute("src", "");
    document.getElementsByClassName("aproposimg")[0].setAttribute("alt", "");
}

function showProposImg() {
    document.getElementsByClassName("aproposimg")[0].setAttribute("src", "images/cv.png");
    document.getElementsByClassName("aproposimg")[0].setAttribute("alt", "Samuel Paquette CV");
}

function clearSectionText() {
    document.getElementById("text1").style.display = "none";
    document.getElementById("text2").style.display = "none";
}

function showSectionText() {
    document.getElementById("text1").style.display = "block";
    document.getElementById("text2").style.display = "block";
}

function clearSlideShow() {
    document.getElementsByClassName("slideshow")[0].style.display = "none";
}

function showSlideShow() {
    document.getElementsByClassName("slideshow")[0].style.display = "block";
}

function plusSlides(n) {
    slideIndex += n;
    showSlides(slideIndex);
}

function currentSlide(n) {
    slideIndex = n
    showSlides(slideIndex);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }   // if beyond the last one, go to the first one
    if (n < 1) { slideIndex = slides.length }   // if before the first one, go to the last one
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function automaticChange() {
    slideIndex++;
    showSlides(slideIndex);
    setTimeout(automaticChange, 7000);   // call again automaticChange() after 7s
}