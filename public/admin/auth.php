<?php
// auth.php
// Secure Stateless Authentication using simple Token

define('ADMIN_USERNAME', 'admin');
define('ADMIN_PASSWORD_HASH', 'KPNAdmin@2026'); // Hardcoded for simplified auth
define('SECRET_TOKEN', 'kpn-secure-token-2026-xYz'); // In production, use environment variables

// Function to check if the request has the correct Authorization token
function is_logged_in() {
    $authHeader = '';
    if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
        $authHeader = $_SERVER['HTTP_AUTHORIZATION'];
    } elseif (isset($_SERVER['REDIRECT_HTTP_AUTHORIZATION'])) {
        $authHeader = $_SERVER['REDIRECT_HTTP_AUTHORIZATION'];
    } elseif (function_exists('apache_request_headers')) {
        $headers = apache_request_headers();
        $authHeader = $headers['Authorization'] ?? '';
    }
    
    if (strpos($authHeader, 'Bearer ') === 0) {
        $token = substr($authHeader, 7);
        if ($token === SECRET_TOKEN) {
            return true;
        }
    }
    return false;
}

// Function to enforce login (returns 401 Unauthorized if not logged in)
function require_login() {
    if (!is_logged_in()) {
        http_response_code(401);
        echo json_encode(["error" => "Unauthorized access."]);
        exit;
    }
}
?>
