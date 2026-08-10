<?php
// upload.php
// Secure File Upload for Blog Images

// CORS for local development
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

header('Content-Type: application/json');

require_once 'auth.php';
require_login(); // Ensure only admins can upload files

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed"]);
    exit;
}

// Check if file was uploaded without errors
if (!isset($_FILES['image']) || $_FILES['image']['error'] !== UPLOAD_ERR_OK) {
    http_response_code(400);
    echo json_encode(["error" => "No file uploaded or upload error."]);
    exit;
}

$file = $_FILES['image'];
$fileName = $file['name'];
$fileSize = $file['size'];
$fileTmpName = $file['tmp_name'];
$fileType = mime_content_type($fileTmpName);

// Validate file type
$allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
if (!in_array($fileType, $allowedTypes)) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid file type. Only JPG, PNG, WEBP, and GIF are allowed."]);
    exit;
}

// Validate file size (max 5MB)
if ($fileSize > 5 * 1024 * 1024) {
    http_response_code(400);
    echo json_encode(["error" => "File is too large. Max size is 5MB."]);
    exit;
}

// Create uploads directory if it doesn't exist
// To make the images accessible to Next.js in production, they need to be in a public folder
// Since Next.js is statically exported, the live server root will have the "out" folder contents
// We'll save it to an "uploads" directory at the root of the server (next to "admin")
$uploadDir = '../uploads/';
if (!is_dir($uploadDir)) {
    mkdir($uploadDir, 0755, true);
}

// Generate unique filename to prevent overwriting
$fileExtension = pathinfo($fileName, PATHINFO_EXTENSION);
$newFileName = uniqid('blog_') . '.' . $fileExtension;
$uploadPath = $uploadDir . $newFileName;

if (move_uploaded_file($fileTmpName, $uploadPath)) {
    // Return the URL to access the image.
    // If the server root is /php/KPN/ (local dev) or / (production), 
    // it's safest to return a relative path from the domain root.
    
    // Determine the base path of the current script to calculate the absolute URL path
    $protocol = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http";
    $host = $_SERVER['HTTP_HOST'];
    $basePath = str_replace('/admin/upload.php', '', $_SERVER['SCRIPT_NAME']);
    $fileUrl = $protocol . "://" . $host . $basePath . '/uploads/' . $newFileName;
    
    echo json_encode([
        "status" => "success", 
        "url" => $fileUrl
    ]);
} else {
    http_response_code(500);
    echo json_encode(["error" => "Failed to move uploaded file."]);
}
?>
