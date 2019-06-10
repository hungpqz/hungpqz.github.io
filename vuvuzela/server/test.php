<?php
require_once('config.php');

function getVoucher($_name,$_email,$_campaign,$_url,$_key)
{
	
	$fullname=urlencode($_name);
	$data=$_url."?key=".$_key."&fullname=".$fullname."&campaign=".$_campaign;
	$curl = curl_init($data); 
	curl_setopt($curl, CURLOPT_FAILONERROR, true); 
	curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true); 
	curl_setopt($curl, CURLOPT_RETURNTRANSFER, true); 
	$result = curl_exec($curl); 
		
	$obj = json_decode($result,true);

    if($obj['messageCode']==1)
    {
		$res['code']=$obj['result']['code'];
		$res['expiredTime']=$obj['result']['expiredTime'];
		$res['conditional']=$obj['result']['conditional'];
		$res['name']=$obj['result']['campaign']['name'];
		$res['messageCode']=$obj['messageCode'];

		return $res;
    }
    else
    {
       print "ErrorMessage:".$obj['message'];
	   $res['messageCode']=$obj['messageCode'];
	   return $res;
    }
getVoucher("Pham Quang Hung","quanghung.pham@gmail.com",$api_url,$api_key);
?>