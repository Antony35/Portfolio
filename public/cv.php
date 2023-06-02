<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" href="../assets/technology.png">
  <link rel="stylesheet" href="../css/style.css">
  <script src="../dist/polyfill.bundle.js" type="module"></script>
  <script src="../dist/all.bundle.js" type="module"></script>
  <title>CV</title>
</head>
<body>
  <div class="button-open-side-menu burger-bg">
    <span class="button-open-side-menu__burger-line"></span>
  </div> 
  <nav class="nav">
    <div class="nav__network">
      <a href="https://www.linkedin.com/in/antony-huart/"><img src="../assets/linkedin.png" alt="logo linkedin"></a>
      <a href="https://github.com/Antony35"><img src="../assets/github.png" alt="logo github"></a>
    </div>
    <div class="nav__section">
      <a class="" href="index.php#home"><img src="../assets/technology.png" alt="home"></a>
      <a class="" href="index.php#about">a propos</a>
      <a class="" href="index.php#projects">projet</a>
      <a href="cv.php">cv</a>
      <a class="" href="index.php#contact">contact</a>
    </div>
  </nav>
  <section class="cv">
    <img src="../assets/CV-Antony-Huart.webp" alt="mon cv">
    <object data="mypdf.pdf" type="application/pdf" frameborder="0" width="90%" height="500px">
      <embed src="../assets/CV-Antony-Huart.pdf" width="100%" height="500px"/> 
    </object>
  </section>
  <footer>
    <p> © Copyright 2023 - Antony HUART. Tous droits réservés.</p>
    <p><a href="#home">Accueil</a> | <a href="../mention.php">Mentions légales</a></p> 
  </footer>
</body>
</html>