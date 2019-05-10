<?php


error_reporting(E_ERROR | E_WARNING | E_PARSE);
date_default_timezone_set('Asia/Ho_Chi_Minh');

/*
$host="localhost"; //replace with your hostname 
$username="root"; //replace with your username 
$password=""; //replace with your password
$db_name="testdrive"; //replace with your database 

*/
$host="localhost"; //replace with your hostname 
$username="cheapvps_toyota"; //replace with your username 
$password="X[(_WMOJRpZ9"; //replace with your password
$db_name="cheapvps_toyota"; //replace with your database

$con=mysql_connect("$host", "$username", "$password")or die("cannot connect"); 
mysql_set_charset('utf8',$con);
mysql_select_db("$db_name")or die("cannot select DB");

$sql = "UPDATE `register`  SET  win=1 WHERE ID =".@$_GET["userID"]." ;";
$result = mysql_query($sql);

mysql_close();

?>