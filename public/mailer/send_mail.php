<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, X-CSRF-Token");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

header("Content-Type: application/json; charset=UTF-8");

// Only allow POST requests
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Method Not Allowed"]);
    exit();
}

// Get JSON POST body
$inputJSON = file_get_contents('php://input');
$input = json_decode($inputJSON, TRUE);

if (!$input) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Invalid JSON payload"]);
    exit();
}

if (!empty($input['bot_field'])) {
    // Act like it was successful so the bot doesn't try other vectors
    http_response_code(200);
    echo json_encode(["status" => "success", "message" => "Quote request received!"]);
    exit();
}

function sanitize_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data, ENT_QUOTES, 'UTF-8');
    return $data;
}

$formType = isset($input['formType']) ? sanitize_input($input['formType']) : 'Unknown Form';
$name = isset($input['name']) ? sanitize_input($input['name']) : '';
$phone = isset($input['phone']) ? sanitize_input($input['phone']) : '';
$email = isset($input['email']) ? filter_var(trim($input['email']), FILTER_SANITIZE_EMAIL) : 'Not Provided';
$location = isset($input['location']) ? sanitize_input($input['location']) : 'Not Provided';
$shedType = isset($input['shedType']) ? sanitize_input($input['shedType']) : 'Not Provided';
$messageContent = isset($input['message']) ? sanitize_input($input['message']) : '';

// Basic validation
if (empty($name) || empty($phone)) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Name and Phone are required fields."]);
    exit();
}

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Example paths if PHPMailer is placed manually in a folder called 'PHPMailer' inside 'mailer'
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'inymartlabs@gmail.com';
    $mail->Password   = 'kpxlbctyiqxvzuhq';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = 465;

    // Recipients
    $mail->setFrom('kpnroofingshed555@gmail.com', 'KPN Website Form');
    $mail->addAddress('kpnroofingshed555@gmail.com', 'KPN Admin');
    $mail->addReplyTo($email !== 'Not Provided' ? $email : 'kpnroofingshed555@gmail.com', $name);
    
    // Content
    $mail->isHTML(true);
    $mail->Subject = "New $formType Submission from $name";
    
    // Construct HTML Email Body
    $body = "<h2>New Lead from KPN Website</h2>";
    $body .= "<p><strong>Form:</strong> {$formType}</p>";
    $body .= "<p><strong>Name:</strong> {$name}</p>";
    $body .= "<p><strong>Phone:</strong> {$phone}</p>";
    if ($email !== 'Not Provided') $body .= "<p><strong>Email:</strong> {$email}</p>";
    if ($location !== 'Not Provided') $body .= "<p><strong>Location:</strong> {$location}</p>";
    if ($shedType !== 'Not Provided') $body .= "<p><strong>Shed Type:</strong> {$shedType}</p>";
    
    $body .= "<h3>Message / Details:</h3>";
    $body .= "<p>" . nl2br($messageContent) . "</p>";

    $mail->Body = $body;
    $mail->AltBody = strip_tags(str_replace(['<p>', '<h2>', '<h3>'], "\n", $body));

    $mail->send();
    
    http_response_code(200);
    echo json_encode(["status" => "success", "message" => "Request sent successfully! Our team will contact you shortly."]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Sorry, we couldn't send your message right now. Please try again later."]);
}
?>
