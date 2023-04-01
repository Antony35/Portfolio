<?php

session_start();

//function to verfy data send by user
function valid_donnees($donnees){
  $donnees = trim($donnees);
  $donnees = stripslashes($donnees);
  $donnees = htmlspecialchars($donnees);
  return $donnees;
}


//check if methode POST is use
if($_SERVER['REQUEST_METHOD'] == 'POST') {
  if ($_POST['random'] == $_SESSION['random']) {
    $date = date('Y-m-d H:i:s');
    //Verify the data and connect to the BDD
    $name = valid_donnees($_POST['user_name']);
    $email = valid_donnees($_POST['user_email']);
    $message = valid_donnees($_POST['user_message']);
    if (!empty($name) && strlen($name) <= 20 && preg_match("/^[a-zA-Z\- áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]+$/",$name) && 
        !empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
      try {
        $db = new PDO('mysql:host=localhost;dbname=portfolio;charset=utf8','root','root');
      }
      catch (Exception $e) {
        die('Erreur : ' . $e->getMessage());
      }
      //Insert the input from the form in the BDD
      if (!empty($name) && !empty($email) && !empty($message)) {
        $sqlQuery = 'INSERT INTO formulaire_de_contact(user_name, user_email, user_message) VALUES (:name, :email, :message)';
        $insertForm = $db->prepare($sqlQuery);
      }
      $insertForm->execute([
        'name'    => $name,
        'email'   => $email,
        'message' => $message,
      ]);
      //created the variable for mail
      $to       =  "antony.huart37@gmail.com";
      $subject  =  "Nouveau message de Portfolio";
      $msg      =  "Le : " . $date . "\r\n"  . "\r\n" . "De : " . $name . " " . $email . "\r\n" . "\r\n" . wordwrap($message, 70, "\r\n");
      $headers  = "Content-Type: text/plain; charset=utf-8\r\n" .
                  "From:" . $email . "\r\n" .
                  "Reply-To:" . $email . "\r\n";
      //send mail
      (mail($to, $subject, $msg, $headers));
      unset($_SESSION['random']);
      header('Location: http://localhost/page/thanks');
    }
    header('Location: http://localhost/page/');
  }
} 
else {
  http_response_code(405);
  echo('Méthode non autorisée');
}


//validation data with recaptcha waiting for fixing bug
/*
session_start();

//function to verfy data send by user
function valid_donnees($donnees){
  $donnees = trim($donnees);
  $donnees = stripslashes($donnees);
  $donnees = htmlspecialchars($donnees);
  return $donnees;
}


//check if methode POST is use
if($_SERVER['REQUEST_METHOD'] == 'POST') {
  //check if recaptcha-response get a value
  if(!empty($_POST['recaptcha-response'])) {
    header('Location:  http://localhost/contact.php');
  }
  else {
    //make url ready for checking the true answer from value of recaptcha with the secret key
    $url = "https://www.google.com/recaptcha/api/siteverify?secret=6LcXXwokAAAAACMUMcCfzmhrMvDp7XlS6CEouAaI={$_POST['recaptcha-response']}";
    //check if curl exist
    if(function_exists('curl_version')) {
      $curl = curl_init($url);
      curl_setopt($curl, CURLOPT_HEADER, false);
      curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
      curl_setopt($curl, CURLOPT_TIMEOUT, 1);
      curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
      $response = curl_exec($curl);
    }
    else {
      $response = file_get_contents($url);
    }
    //check if we got an answer not empty 
    if(empty($response) || is_null(($response))) {
      header('Location:  http://localhost/contact.php');
    }
    else {
      $data = json_decode($response);
      if($data->success) { 
        //check is form not already submit
        if ($_POST['random'] == $_SESSION['random']) {
          $date = date('Y-m-d H:i:s');
          //Verify the data and connect to the BDD
          $name = valid_donnees($_POST['user_name']);
          $email = valid_donnees($_POST['user_email']);
          $message = valid_donnees($_POST['user_message']);
          if (!empty($name) && strlen($name) <= 20 && preg_match("/^[a-zA-Z\- áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]+$/",$name) && 
             !empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
            try {
              $db = new PDO('mysql:host=localhost;dbname=blog_voyage;charset=utf8','root','root');
            }
            catch (Exception $e) {
              die('Erreur : ' . $e->getMessage());
            }
            //Insert the input from the form in the BDD
            if (!empty($name) && !empty($email) && !empty($message)) {
              $sqlQuery = 'INSERT INTO formulaire_de_contact(user_name, user_email, user_message) VALUES (:name, :email, :message)';
              $insertForm = $db->prepare($sqlQuery);
            }
            $insertForm->execute([
              'name'    => $name,
              'email'   => $email,
              'message' => $message,
            ]);
            //created the variable for mail
            $to       =  "antony.huart37@gmail.com";
            $subject  =  "Nouveau message de blog_voyage";
            $msg      =  "Le : " . $date . "\r\n"  . "\r\n" . "De : " . $name . " " . $email . "\r\n" . "\r\n" . wordwrap($message, 70, "\r\n");
            $headers  = "Content-Type: text/plain; charset=utf-8\r\n" .
                        "From:" . $email . "\r\n" .
                        "Reply-To:" . $email . "\r\n";
            //send mail
            (mail($to, $subject, $msg, $headers));
            unset($_SESSION['random']);
          }
          header('Location: http://localhost/thanksForm.php');
        }
        else {
          header('Location: http://localhost/thanksForm.php');
        }
      }
      else {
        header('Location: http://localhost/thanksForm.php');
      }
    } 
  }
}
else {
  http_response_code(405);
  echo('Méthode non autorisée');
}
*/
?> 