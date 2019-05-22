<?php

require_once('config.php');
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

date_default_timezone_set('Asia/Ho_Chi_Minh');


 
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

		return $res;
    }
    else
    {
       print "ErrorMessage:".$obj['message'];
	   return $obj['messageCode'];
    }
}
/***********************************************
1. GCMH 2019 uống 2 tặng 1 budvar- gu2t - tỉ trọng 80%
2. Chúc may mắn lần sau - tỉ trọng 10%
3. GCMH 2019 free 1 ly bia - gmh1- tỉ trọng 5%
4. gcmh 2019 vc 10 ly bia game - gc10- 2%
5. gcmh 2019 vc 20 ly bia - gc20 – 2%
6. Giải cứu mùa hè 2019 game vc 100 ly bia - g100 – 1%
************************************************/



$result=getVoucher(@$_POST["fullname"],@$_POST["email"],@$_POST["campaign"],$api_url,$api_key);

//Just for test
//$myfile = fopen("newfile.txt", "w") or die("Unable to open file!");
//$txt = "Name:".@$_POST["fullname"]."\nEmail:".@$_POST["email"]."\nCampaign:".@$_POST["campaign"]." Code:".$result['code'];
//fwrite($myfile, $txt);
//fclose($myfile);
//Just for test

$mail_content="
Chúc mừng Anh/Chị <b>".@$_POST["fullname"]."</b> đã trúng thưởng <b>".$result['name']."</b><br><br>

Vuvuzela thân gửi Anh/Chị code ưu đãi <b>".$result['code']."</b>. <br>
Ngoài ra, hàng loạt các ưu đãi và giải thưởng hấp dẫn lên đến 1 TỶ ĐỒNG đang chờ Anh/Chị khám phá. Hãy tới Vuvuzela để sử dụng ưu đãi này nhé!<br>
Hẹn gặp lại Anh/Chị tại Vuvuzela dịp gần nhất!<br>
Cảm ơn Anh/Chị<br>
---------------------------<br>
Vuvuzela Beer Club <br>
🍺Hotline: 1900 6622<br> 
🍻Website: http://vuvuzela.com.vn<br>
#Vuvuzela #Beerclub #CaulacboBiatuoi #VuvuzelaBeerclub #Giaicuumuahe #2019<br>";



$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
try {
    //Server settings // Setting depend on your server and mail system
	/*
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'smtp1.example.com;smtp2.example.com';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'user@example.com';                 // SMTP username
    $mail->Password = 'secret';                           // SMTP password
    $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 587;                                    // TCP port to connect to
	*/

    //Recipients
    $mail->setFrom($from_email, $from_name); //Please add Vuvuzela mail send from
	//$mail->addAddress(@$_POST["email"], @$_POST["fullname"]); 
    //$mail->addAddress("quanghung.pham@gmail.com", "Pham Quang Hung");     // Add a recipient
    $mail->addReplyTo($reply_email, $reply_name); //Please add Vuvuzela mail send from

    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Thong bao trung thuong tu Vuvuzela'; // Please change to new subject 
    $mail->Body    = $mail_content;
    //$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
}



?>

