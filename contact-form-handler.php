<?php

    $name =$_POST['name'];
	$visitor_email =$_POST['email'];
	$message = $_POST['message'];
	
	$email_form ='info.inspiration.design@gmail.com';
	$email_subject ="Message from Inspiration-Design website";
	$email_body = "User Name: $name.\n".
	               "User Email: $visitor_email.\n".
				   "User Message: $message.\n";
	
	$to= "info@inspiration-design.org";
	$headers  = "From: $email_form \r\n";
	$headers .= "Reply-To: $visitor_email \r\n";
	
	mail($to, $email_subject, $email_body, $headers);
	
	header("Location: home.html");

?>