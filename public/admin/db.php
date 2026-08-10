<?php
// db.php
// Secure SQLite Database initialization and connection

$dbFile = __DIR__ . '/kpn_blogs.sqlite';

try {
    // Create (connect to) SQLite database in file
    $pdo = new PDO('sqlite:' . $dbFile);
    // Set errormode to exceptions
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Create the blogs table if it doesn't exist
    $pdo->exec("CREATE TABLE IF NOT EXISTS blogs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        slug TEXT NOT NULL UNIQUE,
        category TEXT NOT NULL,
        author TEXT NOT NULL,
        read_time TEXT,
        image TEXT,
        content TEXT NOT NULL,
        meta_title TEXT,
        meta_description TEXT,
        meta_keywords TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )");

} catch (PDOException $e) {
    // Return secure error without exposing server path
    http_response_code(500);
    die(json_encode(["error" => "Database connection failed."]));
}
?>
