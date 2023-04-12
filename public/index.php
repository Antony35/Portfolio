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
  <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../css/style.css">
  <script src=".././dist/polyfill.bundle.js" type="module" ></script>
  <script src=".././dist/main.bundle.js" type="module"></script>
  <script src=".././dist/all.bundle.js" type="module"></script>
  <title>Portfolio</title>
</head>
<body>
  <main id="home" data-spy>
    <div id="open-btn" class="">
      <p class="burger-line"></p>
    </div>
    <nav id="nav" class="">
      <a class="" href="#home"></a>
      <a class="" href="#about">a propos</a>
      <a class="" href="#project">projet</a>
      <a href="cv.php">cv</a>
      <a class="" href="#contact">contact</a>
    </nav>
    <div data-spy class="presentation reveal">
      <h1 class="reveal-1">antony huart</h1>
      <h2 class="reveal-2">intégrateur web</h2>
      <q class="reveal-3">Les détails font la perfection et la perfection n'est pas un détail.</q>
      <p class="reveal-3">Léonard de Vinci</p>
    </div>
      <a href="#about">
        <div class="reveal">
          <div class="reveal-4 container-arrow">
          <div class="arrow-part-1"></div>
        </div>
      </a>
  </main>
  
<section id="about" data-spy>
  <article class="about reveal">
    <div class="block-1">
      <h1 class="reveal-1">qui suis-je ?</h1>
      <div class="reveal-2">
        <p >Bonjour, je m’appelle Antony Huart. Je reviens d’un voyage de 3 ans qui fût riche en découvertes. C’est pendant cette période que j’ai commencé à me former en autodidacte au métier de développeur web. Passionné par l’informatique, c’est avec détermination que je souhaite me reconvertir dans ce secteur.
        <p >En cours d’admission à l’école CEFIM, je suis à la recherche d’une agence web pour mon alternance du 25 septembre 2023 au 19 septembre 2024.</p>
        <p>Objectif : obtenir le titre professionnel RNCP Bac +2, “Développeur web et web mobile”.</p>
      </div>
    </div>
    <div class="block-2">
      <h1 class="reveal-1">ma vision</h1>
      <div  class="reveal-2">
        <p>Le développement web est:<p>
        <ul>
          <li>la réalisation d’une idée rendue accessible à quiconque en aurait besoin ;</li>
          <li>Un métier où l’évolution et l’apprentissage sont sans limite ;</li> 
          <li>Un secteur où le partage et l’entraide sont omniprésents.</li>
        </ul>
      </div>
    </div>
    <img class="reveal-3" src="../img/profil.png" alt="ma photo de portrait">
  </article>
</section>

<section id="project" data-spy>
  <article class="container-project reveal">
    <h1 class="reveal-1">mes projets</h1>
    <a href="https://github.com/Antony35/FirstBlogProject"><img class="reveal-2"src="../img/pagePrincipalBlog.png" alt="Page principal du projet blog voyage"></a>
    <a href="#"><img class="reveal-2"src="../img/portfolio.png" alt="Page principale du projet portfolio"></a>
    <a href="#"><img class="reveal-2"src="../img/prochainement.png" alt="future projet"></a>
    <a href="#"><img class="reveal-3"src="../img/prochainement.png" alt="future projet"></a>
    <a href="#"><img class="reveal-3"src="../img/prochainement.png" alt="future projet"></a>
    <div class="reveal-3 info">
      <h1>Titre projet</h1>
      <h3>Description</h3>
      <h5>techno utiliser</h5>
    </div>
  </article>
</section>

<section  id="contact" data-spy>
  <article class="reveal-1 contact">
    <form  method="POST" action="submit_contact.php">
      <div>
        <label for="name">Votre Nom :</label>
        <input type="text" id="name" name="user_name" maxlength="26" required pattern="^[a-zA-Z\- áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]+$">
        <p id="name-error">Nom invalide</p>
      </div>
      <div>
        <label for="email">Votre e-mail :</label>
        <input type="email" id="email" name="user_email" maxlength="128" required pattern="^([a-z0-9.]+)@([a-z0-9]+)\.+([a-z]{1,4})$">
        <p id="email-error">Email invalide</p>
      </div>
      <div>
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
</body>
<footer>
  <p> © Copyright 2023 - Antony HUART. Tous droits réservés.</p>
  <p><a href="#home">Accueil</a> | <a href="./mention.php">Mentions légales</a></p> 
</footer>
</html>