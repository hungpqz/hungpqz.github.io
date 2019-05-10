<?php
//error_reporting(E_ERROR | E_PARSE);
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


function timeCode()
{
date_default_timezone_set('Asia/Ho_Chi_Minh');
switch (date('H')) {
	case 8:
		if (date('i')<30) $t=1; else $t=2;
	break;
	case 9:
		if (date('i')<30) $t=3; else $t=4;
	break;
	case 10:
		if (date('i')<30) $t=5; else $t=6;
	break;
	case 11:
		if (date('i')<30) $t=7; else $t=8;
	break;
	case 12:
		if (date('i')<30) $t=9; else $t=10;
	break;
	case 13:
		if (date('i')<30) $t=11; else $t=12;
	break;
	case 14:
		if (date('i')<30) $t=13; else $t=14;
	break;
	case 15:
		if (date('i')<30) $t=15; else $t=16;
	break;
	case 16:
		if (date('i')<30) $t=17; else $t=18;
	break;
	case 17:
		$t=18;
	break;
default: $t=0;
}
return $t;
}



$con=mysql_connect("$host", "$username", "$password")or die("cannot connect"); 
mysql_set_charset('utf8',$con);
mysql_select_db("$db_name")or die("cannot select DB");
if (timeCode()<9)

{
	$sql = "SELECT FullName,ID,Phone,DOB,Title FROM register WHERE (Checkpoint>0) AND (JoinDate1=".date('d').") AND (JoinTime1<6) AND (win=0)";
}

if (timeCode()>14)
{
	$sql = "SELECT FullName,ID,Phone,DOB,Title FROM register WHERE (Checkpoint>0) AND (JoinDate1=".date('d').") AND (JoinTime1>5) AND (	win=0)";
}

$result = mysql_query($sql);
$json = array();
if(mysql_num_rows($result)){
	$i=0;
	while($row=mysql_fetch_row($result)){
		$i=$i+1;
		$jr = array();
		$jr['STT']=$i;
		$jr['MODEL']=$row[0]; //ten khach hang
		$jr['IMEI']=$row[1]; //ma so
		$jr['BILL_ID']=$row[2]; //dienthoai
		$jr['DATE_BUY']=$row[3]; //ngay sinh
		$jr['DOT']=$row[4];  // danh xung
		
		$json[]=$jr;

	}
}
mysql_close();
header('Content-Type: application/json; charset=utf-8');
echo json_encode($json); 

// please refer to our PHP JSON encode function tutorial for learning json_encode function in detail 
?>
