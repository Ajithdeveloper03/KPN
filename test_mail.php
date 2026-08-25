<?php
require 'public/mailer/PHPMailer/src/Exception.php';
require 'public/mailer/PHPMailer/src/PHPMailer.php';
require 'public/mailer/PHPMailer/src/SMTP.php';
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

\ = new PHPMailer(true);
try {
    \->SMTPDebug = 2; // Enable verbose debug output
    \->isSMTP();
    \->Host       = 'smtp.gmail.com';
    \->SMTPAuth   = true;
    \->Username   = 'inymartlabs@gmail.com';
    \->Password   = 'kpxlbctyiqxvzuhq';
    \->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    \->Port       = 465;

    \->setFrom('kpnroofingsheds@gmail.com', 'KPN Website Form');
    \->addAddress('inymartlabs@gmail.com');
    
    \->Subject = 'Test';
    \->Body = 'Test';
    \->send();
    echo 'SUCCESS';
} catch (Exception \) {
    echo 'ERROR: ' . \->ErrorInfo;
}
?>
