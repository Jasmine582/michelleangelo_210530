<?php

if (issets($_POST[ 'submit'])) {
  $mailFrom = $_POST['mail'];

  $mailTo="connect@michelleangelowrites.com";
  $headers = "From: ".$mailFrom;
  $txt= "You have a new subscriber"

  mail($mailTo, $headers, $txt);
  header("Location: index.html?mailsend");

  echo "Thanks";

}
