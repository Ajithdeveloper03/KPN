<?php
// auth.php
// Secure Authentication & Session Management

// Start session securely
session_set_cookie_params([
    'lifetime' => 3600 * 12, // 12 hours
    'path' => '/admin',
    'domain' => $_SERVER['HTTP_HOST'],
    'secure' => isset($_SERVER['HTTPS']),
    'httponly' => true,
    'samesite' => 'Strict'
]);
session_start();

// Hardcoded Admin Credentials (Username: admin / Password: KPNAdmin@2026)
define('ADMIN_USERNAME', 'admin');
define('ADMIN_PASSWORD_HASH', '$2y$10$pf1FdobmOqGXAlkKTbSvke9DwkZFv1hVg5aQ8Nvfa5BVJu1WKJ4I2');

// Function to generate CSRF token
function generate_csrf_token() {
    if (empty($_SESSION['csrf_token'])) {
        $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
    }
    return $_SESSION['csrf_token'];
}

// Function to verify CSRF token
function verify_csrf_token($token) {
    if (isset($_SESSION['csrf_token']) && hash_equals($_SESSION['csrf_token'], $token)) {
        return true;
    }
    return false;
}

// Function to check if user is logged in
function is_logged_in() {
    return isset($_SESSION['admin_logged_in']) && $_SESSION['admin_logged_in'] === true;
}

// Function to enforce login (redirects to index.php if not logged in)
function require_login() {
    if (!is_logged_in()) {
        header("Location: index.php");
        exit;
    }
}
?>
