<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../css/style.css">
  <script src="../dist/polyfill.bundle.js" type="module"></script>
  <script src="../dist/all.bundle.js" type="module"></script>
  <title>CV</title>
</head>
<body>
  <div id="open-btn" class="burger-bg">
    <p class="burger-line"></p>
  </div>
  <nav id="nav" class="">
      <a class="" href="#home"></a>
      <a class="" href="index.php#about">a propos</a>
      <a class="" href="index.php#project">projet</a>
      <a href="cv.php">cv</a>
      <a class="" href="index.php#contact">contact</a>
  </nav>
  <div class="cv">
    <img src="../img/CV.webp" alt="mon cv">
    <object data="mypdf.pdf" type="application/pdf" frameborder="0" width="90%" height="600px">
      <embed src="../img/CV.pdf" width="100%" height="600px"/> 
    </object>
  </div>
</body>
<footer>
  <p> © Copyright 2023 - Antony HUART. Tous droits réservés.</p>
  <p><a href="#home">Accueil</a> | <a href="../mention.php">Mentions légales</a></p> 
</footer>
</html>