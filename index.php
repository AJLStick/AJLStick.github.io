<?php
if ($_COOKIE['iwashere'] != "yes") { 
  setcookie("iwashere", "yes", time()+315360000);  
  header("Location: http://ajlstick.github.io/home.html"); 
}
?>
