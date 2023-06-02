<?php session_start();
//created a random number to check if the form have been already submit
$random = rand(1, 100);
$_SESSION['random'] = $random;
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="icon" href="../assets/technology.png">
  <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../css/style.css">
  <script src=".././dist/polyfill.bundle.js" type="module" ></script>
  <script src=".././dist/main.bundle.js" type="module"></script>
  <script src=".././dist/all.bundle.js" type="module"></script>
  <title>Portfolio Antony Huart</title>
</head>

<body>
  <header id="home" data-spy>
    <div class="button-open-side-menu">
      <span class="button-open-side-menu__burger-line"></span>
    </div> 
    <nav class="nav">
      <div class="nav__network">
        <a href="https://www.linkedin.com/in/antony-huart/"><img src="../assets/linkedin.png" alt="logo linkedin"></a>
        <a href="https://github.com/Antony35"><img src="../assets/github.png" alt="logo github"></a>
      </div>
      <div class="nav__section">
        <a class="" href="#home"><img src="../assets/technology.png" alt="home"></a>
        <a class="" href="#about">a propos</a>
        <a class="" href="#projects">projet</a>
        <a href="cv.php">cv</a>
        <a class="" href="#contact">contact</a>
      </div>
    </nav>
    <div class="presentation reveal">
      <div class="presentation__name">
        <h1 class="reveal-1">Antony Huart</h1>
        <h2 class="h2-title reveal-2">Développeur Web</h2>
      </div>
      <blockquote class="presentation__citation">
        <q class="reveal-3">Votre travail va occuper une grande partie de votre vie. La seule façon d'être vraiment satisfait est de faire ce que vous croyez être un excellent travail. Et la seule façon de faire un excellent travail est d'aimer ce que vous faites.</q>
        <p class="reveal-4">Steve Jobs</p>
      </blockquote>
    </div>
  </header>
  
  <section id="about" data-spy>
    <article class="about reveal">
      <div class="about__who-I-am">
        <h2 class="about__who-I-am__title reveal-1">qui suis-je ?</h2>
        <div class="about__who-I-am__text reveal-2">
          <p >Bonjour, je m’appelle Antony Huart. Je reviens d’un voyage de 3 ans qui fût riche en découvertes. C’est pendant cette période que j’ai commencé à me former en autodidacte au métier de développeur web. Passionné par l’informatique, c’est avec détermination que je souhaite me reconvertir dans ce secteur.
          <p >Admissible à l’école CEFIM, je suis à la recherche d’une entreprise pour mon alternance du 25 septembre 2023 au 19 septembre 2024.</p>
          <p>Objectif : obtenir le titre professionnel RNCP Bac+2, “Développeur web et web mobile”.</p>
        </div>
      </div>
      <div class="about__my-vision">
        <h2 class="about__my-vision__title reveal-1">ma vision</h2>
        <div  class="about__my-vision__text reveal-2">
          <p>Le développement web est:<p>
          <ul>
            <li>-La réalisation d’une idée rendue accessible à quiconque en aurait besoin.</li>
            <li>-Un métier où l’évolution et l’apprentissage sont sans limite.</li> 
            <li>-Un secteur où le partage et l’entraide sont omniprésents.</li>
          </ul>
        </div>
      </div>
      <img class="reveal-3" src="../assets/profil.png" alt="ma photo de portrait">
    </article>
  </section>

  <section id="projects" data-spy>
    <article class="projects reveal">
      <h2 class="reveal-1">mes projets</h2>
      <a class="reveal-2" href="https://github.com/Antony35/FirstBlogProject"><img src="../assets/pagePrincipalBlog.png" alt="Page principal du projet blog voyage"><div class="projects__individual-info"></div></a>
      <a class="reveal-2" href="https://github.com/Antony35/Portfolio"><img src="../assets/portfolio.png" alt="Page principale du projet portfolio"><div class="projects__individual-info"></div></a>
      <a class="reveal-2" href="https://todo-todo-list.netlify.app"><img src="../assets/TODO-List.PNG" alt="TODO-List"><div class="projects__individual-info"></div></a>
      <a class="reveal-3" href="https://j-u-n-gle-house.netlify.app"><img src="../assets/LMJ.PNG" alt="maison jungle site de plante"><div class="projects__individual-info"></div></a>
      <div class="reveal-3 projects__info">
        <h1>Titre projet</h1>
        <h3>Description</h3>
        <h5>techno utiliser</h5>
      </div>
      <a class="reveal-3" href="https://hardware-style.netlify.app"><img src="../assets/cefim-project.PNG" alt="project cefim page magasin"><div class="projects__individual-info"></div></a>
      <a class="reveal-4" href="https://design-v1.netlify.app"><img  src="../assets/disignV1.PNG" alt="maquette 1"><div class="projects__individual-info"></div></a>
      <a class="reveal-4" href="https://n-i-c-e.netlify.app"><img  src="../assets/nice.PNG" alt="maquette 2"><div class="projects__individual-info"></div></a>
      <a class="reveal-4" href="https://benjamin-landing-page.netlify.app"><img src="../assets/benjaminCode.PNG" alt="maquette 3"><div class="projects__individual-info"></div></a>
    </article>
  </section>

  <section id="contact" data-spy="">
    <article class="reveal-1 contact">
      <h2>Contact</h2>
      <form  method="POST" action="submit_contact.php">
        <div class="contact__name">
          <label for="name">Votre nom :</label>
          <input type="text" id="name" name="user_name" maxlength="26" required pattern="^[a-zA-Z\- áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]+$">
          <p id="name-error">Nom invalide</p>
        </div>
        <div class="contact__email">
          <label for="email">Votre e-mail :</label>
          <input type="email" id="email" name="user_email" maxlength="128" required pattern="^([a-z0-9.]+)@([a-z0-9]+)\.+([a-z]{1,4})$">
          <p id="email-error">Email invalide</p>
        </div>
        <div class="contact__text-area">
          <label for="msg">Votre message :</label>
          <textarea id="msg" name="user_message" htmlspecialchars required></textarea>
        </div>
        <div>
          <input type="hidden" id="recaptchaResponse" name="recaptcha-response">
          <button class="submit-btn" id="submit" type="submit" name="submit-btn">Envoyer</button>
          <input type="hidden" name="random" value="<?php echo($random) ?>">
        </div>
      </form>
    </article>
  </section>

  <footer>
    <div>
      <a href="https://www.linkedin.com/in/antony-huart/"><img src="../assets/linkedin.png" alt="logo linkedin"></a>
      <a href="https://github.com/Antony35"><img src="../assets/github.png" alt="logo github"></a>
    </div>
    <p>© Copyright 2023 - Antony HUART. Tous droits réservés.</p>
    <a href="./mention.php">Mentions légales</a>
  </footer>
</body>

</html>