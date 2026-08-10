<?php
// db.php
// Secure MySQL Database initialization and connection

$host = '127.0.0.1';
$user = 'root';
$pass = ''; // Default XAMPP password is empty
$dbname = 'kpn_blogs';

try {
    // First, connect without database to create it if it doesn't exist
    $pdo_setup = new PDO("mysql:host=$host", $user, $pass);
    $pdo_setup->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo_setup->exec("CREATE DATABASE IF NOT EXISTS `$dbname` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci");
    
    // Now connect to the specific database
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Create the blogs table if it doesn't exist
    $pdo->exec("CREATE TABLE IF NOT EXISTS blogs (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title TEXT NOT NULL,
        slug VARCHAR(255) NOT NULL UNIQUE,
        category VARCHAR(255) NOT NULL,
        author VARCHAR(255) NOT NULL,
        read_time VARCHAR(255),
        image TEXT,
        content LONGTEXT NOT NULL,
        builder_data LONGTEXT,
        status VARCHAR(50) DEFAULT 'published',
        meta_title TEXT,
        meta_description TEXT,
        meta_keywords TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )");

    // Try to add new columns to existing table (will silently fail if they already exist)
    try { $pdo->exec("ALTER TABLE blogs ADD COLUMN status VARCHAR(50) DEFAULT 'published'"); } catch(PDOException $e) {}
    try { $pdo->exec("ALTER TABLE blogs ADD COLUMN builder_data LONGTEXT"); } catch(PDOException $e) {}

} catch (PDOException $e) {
    // Return secure error
    http_response_code(500);
    die(json_encode(["error" => "Database connection failed. Please check if MySQL is running in XAMPP."]));
}
?>
